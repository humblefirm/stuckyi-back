var express = require("express");
var router = express.Router();

var DB = {
  users: [],
  goods: [],
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource+with stuck team");
});

module.exports = router;
