var	express = require("express");
var	router = express.Router();

router.use("/log", require("../routes/loginOut") );
router.use("/session", require("../routes/session") );

module.exports = router;