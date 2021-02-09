const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator",function(req,res){
  var weight = parseFloat(req.body.weh)
  var height = parseFloat(req.body.heh)
  var result = weight / (height*height)

  res.send("Your Bmi is "+ result)
})




app.listen(3001,function(){
  console.log("Server Started")
})
