const express = require("express");
const router = express.Router();
const { getTimeStamp } = require("../controllers/timeStamp");

router.route("/:timestamp?").get(getTimeStamp);

module.exports = router;
