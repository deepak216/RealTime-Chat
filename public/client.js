var socket = io();

var message=document.getElementById('message');
var handle=document.getElementById('handle');
var btn=document.getElementById('send');
var output=document.getElementById('output');

if(!btn)
    console.log("button null");
btn.addEventListener("click",function(){
    
    socket.emit("RealTime-Chat",{message:message.value,handle:handle.value});
    message.value="";
    handle.disabled=true;
    
});

socket.on("RealTime-Chat",function(data){
    output.innerHTML+="<p><strong>"+data.handle+":</strong>"+data.message+"</p>";
});
