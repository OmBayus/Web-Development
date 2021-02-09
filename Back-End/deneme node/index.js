const express = require("express")
const bodyParser = require("body-parser")

const app = express()

const port = 3001

app.use(bodyParser.urlencoded({extended: true}))



app.get("/",function(req,res){
  res.send("asdsa")
})

app.listen(port,function(){
    console.log(`Sever Started with Port:${port}`)
})
