var exp = require('express');

var app = exp();

app.listen(9000, function(){
    console.log("Server started on 9000");
});

app.get('/index', function(req,res){
    console.log(__dirname+"/index.html");
	res.sendFile(__dirname+"/index.html");
});