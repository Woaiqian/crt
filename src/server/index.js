var express = require("express");
var app = express();
//post参数处理的一个中间件
var bodyParser = require("body-parser");
var router = require("./router");

//中间件的应用
app.use(bodyParser.urlencoded({
	extended: true
}));

//连接router.js的一个桥梁
app.use("/", router);

app.listen(3000, function() {
	console.log("node服务器在3000端口启动了")
})