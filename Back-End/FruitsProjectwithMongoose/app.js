const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true, useUnifiedTopology: true})

const fruitSchema = new mongoose.Schema ({
  name: {
    type:String,
    required: [true,"You need to write name of the fruit"]
  },
  rating: {
    type:Number,
    min: 1,
    max: 10
  },
  review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit ({
  rating: 10,
  review: "Pretty solid as a fruit."
})

// fruit.save()



Fruit.find(function(err, fruits){
  if (err){
    console.log(err)
  }
  else {
    mongoose.connection.close()
    fruits.forEach(function(i){
      console.log(i.name)
    })
  }
})

// Fruit.updateOne({_id:"5f4bbdcee71c0a3244f80052"}, {name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   }else {
//     console.log("Success");
//   }
// })

const Person = mongoose.model("person",{name:String,
  age:Number,
  favouriteFruit:fruitSchema
})

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit."
})
//pineapple.save()
const banana = new Fruit({
  name: "Banana",
  score: 8,
  review: "Great."
})

// banana.save()

// Person.updateOne({name:"John"},{favouriteFruit:banana},function(err){
//   if (err) {
//     console.log(err);
//   }else {
//     console.log("Successed john update");
//   }
// })



const person = new Person ({
  name:"Amy",
  age:12,
  favouriteFruit: pineapple
})

//person.save()

//
// Person.deleteMany({ name: "Ömer"},function(err){
//   if (err) {
//     console.log(err);
//   }else {
//     console.log("Deleted all");
//   }
// })

// Fruit.deleteOne({_id:"5f4bbdae0f73261b1444e421"},function(err){
//   if (err) {
//     console.log(err);
//   }else {
//     console.log("Deleted");
//   }
// })



// const kiwi = new Fruit({
//   name: "Kiwi",
//   score:9,
//   review: " Good"
// })
// const orange = new Fruit({
//   name: "Orange",
//   score:4,
//   review: " Goodssss"
// })
//
// // Fruit.insertMany([kiwi,orange],function(err){
// //   if(err){
// //     console.log(err)
// //   }
// //   else {
// //     console.log("Success")
// //   }
// // })
