const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
   res.sendFile(__dirname+"/index.html");
})


app.post("/calculator/",function(req,res){
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result=n1+n2;
    res.send("result is"+result);

});

app.listen(3778,function(){
    console.log("running");
 });
 