module.exports = (req, res, next) => {

	/*var allowedOrigins = {
		"http://127.0.0.1" : 1
	};*/

	var origin = req.headers.origin;

	/*if(allowedOrigins[origin])*/ res.set("Access-Control-Allow-Origin", origin);

	res.set("Access-Control-Allow-Methods", "*");
	res.set("Access-Control-Allow-Headers", "*");
	res.set("Access-Control-Expose-Headers", "*");

	if(req.method == "OPTIONS") return res.sendStatus(200);

	next();

};