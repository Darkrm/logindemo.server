var x = {};

x.parse = (data) => {

	try { return JSON.parse(data) }
	catch(err) { return {} };

};

module.exports = x;