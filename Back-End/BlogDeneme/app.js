const express = require("express")
const bodyParser = require("body-parser")
const modules = require(__dirname+"/modules.js")

const app = express()

const items = ["Omerin Harika Blogu :SAD"]

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static("public"));


app.get("/",function(req,res){
  res.render('blog', {newListItems: items})
})

app.post("/",function (req,res){
  let item = req.body.newItem

    items.push(item)
    res.redirect("/")
})

app.get("/admin",function(req,res){
  res.render('admin')
})

app.listen(3000,function(){
  console.log("Server strated")
})
