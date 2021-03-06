var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("./"));

server.listen(3000);

app.get('/', function (request, respons) {
    respons.sendFile(__dirname + '/index.html');
});

users = [];
connections = [];

io.on('connection', function (socket) {
    connections.push(socket);

    socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket), 1);
    });
});