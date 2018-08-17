var crypto = require("crypto");

var x = {};

x.appPort = 7777;
x.jwtAlgorithm = "HS512";
x.jwtExpire = 600;
x.jwtOptions = { algorithm : x.jwtAlgorithm, expiresIn : x.jwtExpire };
x.jwtSecret = crypto.randomBytes(32).toString('hex');
x.postgresHost = "postgres";
x.postgresDB = "postgres";
x.postgresUser = "postgres";
x.redisPort = "6379";
x.redisHost = "redis";

module.exports = x;