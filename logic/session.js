var auth = require("../lib/auth");

module.exports = async (req, res, next) => {

	try {

		var jwt = req.headers.jwt;
		if(!jwt) return res.sendStatus(401);

		var token = await auth.verify(jwt);
		res.set("jwtToken", token);

		return next();

	} catch(err) { return res.sendStatus(401) };

};