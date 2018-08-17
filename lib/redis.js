var config = require("./config");
var redis = require("ioredis");

module.exports = new redis(config.redisPort, config.redisHost);