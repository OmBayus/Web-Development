const express = require("express")

const app = express()

const port = 3001


app.get("/",function(request,response){
  response.send("<center><hr size='3' noshade><h1>Ömer Bayramçavuş</h1><h3>with</h3><h2>NodeJs</h2><hr size='3' noshade></center>")
})

app.get("/contact",function(req,res){
  res.send("Contact me at: omerbayramcavus@gmail.com")
})

app.listen(port,function(){
  console.log(`Server started on port ${port}`)
})
