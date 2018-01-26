var express = require('express');
var socket=require('socket.io');
var app=express();

var server=app.listen(3000,function(){
    console.log('server listening 3000:');
});


app.use(express.static(__dirname + '/public'));

var io=socket(server);


io.on('connection',function(socket){
    socket.on("RealTime-Chat",function(data){
        io.sockets.emit("RealTime-Chat",data);
    });
});
// io.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('disconnect', function(){
//         console.log('user disconnected');
//       });
//   });
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
    