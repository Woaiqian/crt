var express = require("express");
var router = express.Router();
var url = require("url");
var data = require("./data.js");

//解决跨域的问题
router.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

router.get("/all", function(req, res) {
	res.json(200, data);
})


module.exports = router;