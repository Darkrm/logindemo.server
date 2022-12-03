var config = require("./config");
var { Client } = require("pg");

var x = {};

x.init = async () => {

	try {

		var query =
			`
				DROP TABLE IF EXISTS accounts;

				CREATE TABLE IF NOT EXISTS accounts (
					account VARCHAR(36) NOT NULL,
					password VARCHAR NOT NULL
				);

				INSERT INTO accounts VALUES (
					'test@test.com',
					'9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
				);

				SELECT * FROM accounts;
			`;

		var res = await x.query(query);

		return res[3];

	} catch(err) {throw err};

};

x.connect = async () => {

	try {

		var client = new Client({
			host : config.postgresHost,
			user : config.postgresUser,
			database: config.postgresDB,
			password: config.postgresPassword
		});

		await client.connect();

		return client;

	} catch(err) {throw err};

};

x.query = async (query) => {

	try {

		var client = await x.connect();

		var res = await client.query(query);

		await client.end()

		return res;

	} catch(err) {throw err};

};

(async () => {

	while(true) {

		try {

			await x.init();
			console.log("Connected to postgres");
			break;

		} catch(err) {

			console.log(err);

		};

	};

})();

module.exports = x;
