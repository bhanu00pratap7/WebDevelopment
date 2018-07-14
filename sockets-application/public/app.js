$(document).ready(function(){
    var socket=io();
    var btn = $('#btn');
    var inp = $('#inp');
    var result = $('#result');


    btn.click(function(){
        let value = inp.val();
        socket.emit('message', value);
    })
    socket.on('show', function(data){
        result.append(`<li>${data}</li>`)
    })
    
});