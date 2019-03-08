var express=require('express');
var app=express();

var port=process.env.PORT || 3000;

app.listen(port,()=>console.log(`server is listening at : ${port}`));

app.get('/getmsg',(req,res)=>{
    res.send("Hey this is from server");
})