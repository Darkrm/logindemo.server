var	express = require("express");
var	router = express.Router();
var session = require("../logic/session");

router.route("/check").get(session, async (req, res) => {return res.sendStatus(200)});

module.exports = router;