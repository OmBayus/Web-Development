//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const _ = require("lodash")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-ombayus:test123@cluster0.gtzc3.mongodb.net/todolistDB",{useNewUrlParser: true, useUnifiedTopology: true})

const itemSchema = {
  name:String
}

const Item = mongoose.model("Item",itemSchema)

const item1 = new Item ({
  name:"Welcome to your todolist"
})

const item2 = new Item ({
  name:"Hit the + button to aff a new item"
})

const item3 = new Item ({
  name:"<-- Hit this to delete an item."
})

const defaultItems = [item1,item2,item3]

const ListSchema = {
  name:String,
  items: [itemSchema]
}

const List = mongoose.model("List",ListSchema)

app.get("/", function(req, res) {

  Item.find({},function(err,foundItems){

    if (foundItems.length == 0) {
      Item.insertMany(defaultItems,function(err){
        if (err) {
          console.log(err);
        }
        else {
          console.log("Success saved default  items to DB");
        }
      })
      res.redirect("/")
    }else {
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }
  })
});

app.post("/", function(req, res){

  const itemName = req.body.newItem
  const listName = req.body.list

  const newitem = new Item ({
    name:itemName
  })

  if (listName == "Today") {
    newitem.save()
    res.redirect("/")
  }else {
    List.findOne({name:listName},function(err,foundList){
      foundList.items.push(newitem)
      foundList.save()
      res.redirect("/"+listName)
    })
  }


});

app.post("/delete",function(req,res){
  const checkedItem = req.body.checkbox

  const listName = req.body.listName

  if (listName == "Today") {
    Item.findByIdAndRemove(checkedItem,function(err){
      res.redirect("/")
    })
  }
  else {
    List.findOneAndUpdate( {name:listName}, { $pull: {items: {_id:checkedItem} } },function(err,foundlist){
      res.redirect("/"+listName)
    } )

  }

})

app.get("/:customListName", function(req,res){
  const customListName = _.capitalize(req.params.customListName)

  List.findOne({name:customListName},function(err,foundList){
    if (!err) {
      if (!foundList) {
        const list = new List ({
          name:customListName,
          items:defaultItems
        })
        list.save()
        res.redirect("/"+customListName)
      }else {
        res.render("list", {listTitle: foundList.name, newListItems: foundList.items})
      }
    }
  })

});

app.get("/about", function(req, res){
  res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started successfully");
});