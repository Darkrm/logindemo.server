var db = require("../lib/db");
var auth = require("../lib/auth");
var json = require("../lib/json");
var crypto = require("crypto");

var x = {};

x.in = async (req, res) => {

	try {

		var b = json.parse(req.body);

		if(

			!b.email ||
			!b.password

		) return res.sendStatus(400);

		b.email = b.email.toLowerCase();

		var q = {};
			q.text = "SELECT * FROM accounts WHERE account = $1";
			q.values = [b.email];

		var data = await db.query(q);

		var hash = crypto.createHash("sha256").update(b.password).digest("hex");
		var savedHash = data.rows[0].password;

		if(hash !== savedHash) return res.sendStatus(404);

		var token = await auth.new( {account:b.email} );

		res.set("jwtToken", token);
		return res.sendStatus(200);

	} catch(err) { return res.sendStatus(500) };

};

x.out = async (req, res) => {

	try {

		var jwt = req.headers.jwt;
		await auth.destroy(jwt, 1);

		return res.sendStatus(200);

	} catch(err) { res.sendStatus(500) };

};

module.exports = x;