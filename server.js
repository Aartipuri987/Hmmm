var express=require('express');
var app=express();
var HTTP_PORT=process.env.PORT || 8080
app.get("/" ,(req,res)=> {
    res.send("I am ok")
})
app.listen(HTTP_PORT);