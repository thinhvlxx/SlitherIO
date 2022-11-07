var express = require("express");
var SocketControler = require('./Controller/SocketController');
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);

SocketControler(io);
server.listen(3000);
