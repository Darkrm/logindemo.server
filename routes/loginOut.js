var	express = require("express");
var	router = express.Router();
var logic = require("../logic/loginOut");

router.route("/in").post(logic.in);
router.route("/out").get(logic.out);

module.exports = router;