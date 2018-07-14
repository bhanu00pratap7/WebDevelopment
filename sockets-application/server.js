
const http = require('http');
const express = require('express');
const app = express();
const socketServer = http.Server(app);
const socket = require('socket.io');

const io = socket(socketServer);

app.use('/', express.static('public'));


io.on('connection', function(sk){
   sk.on('message', function(data){
    io.emit('show', data)
   })
});

// const server = http.createServer((req,res)=> {
//     res.write("Hello World");
//     res.end();
// });

socketServer.listen(8080, function(){
    console.log("Server is listening on port 8080");

});