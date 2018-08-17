var config = require("./config");
var jwt = require("jsonwebtoken");
var	uuid = require("node-uuid");
var redis = require("./redis");

var x = {};

x.new = async (claim) => {

	try {

		var id = uuid.v4();
		var issued = Math.floor(Date.now() / 1000);

		claim = Object.assign({ jti : id, iat : issued }, claim);

		var token = jwt.sign(claim, config.jwtSecret, config.jwtOptions);

		await redis.setex(id, config.jwtExpire, issued);

		return token;

	} catch(err) {throw err};

};

x.verify = async (token) => {

	try {

		var token = jwt.verify(token, config.jwtSecret);
		var issued = Math.floor(Date.now() / 1000);

		var res = await redis.multi([
				["get", token.jti],
				["setex", token.jti, config.jwtExpire, issued]
		]).exec();

		if(res[0][1] != token.iat || res[1][1] != "OK") throw "There was a issue verifying the jwt.";

		delete token.exp;
		token.iat = issued;

		token = jwt.sign(token, config.jwtSecret, config.jwtOptions);

		return token;

	} catch(err) {

		await x.destroy(token.jti);
		throw err;

	};

};

x.destroy = async (id, isToken) => {

	try {

		if(isToken) id = jwt.decode(id).jti;

		await redis.del(id);

	} catch(err) {throw err};

};

module.exports = x;