const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.post('/bmicalculator',(req,res)=>{
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = ([weight / height / height]*10000);
    bmi = Math.round(bmi*10)/10;
    res.send("Your BMI = "+bmi);
});

app.listen(3000,()=>{
    console.log("Server is running at port 3000");
});