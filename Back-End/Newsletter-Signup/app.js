const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")
const { dir } = require("console")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))


app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/",function(req,res){
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }

            }
        ]
    }

    const jsonData = JSON.stringify(data)

    const url = "https://us17.api.mailchimp.com/3.0/lists/0a118f0575"

    const options = {
        method: "POST",
        auth: "ombayus:9bd441b13427dcc038e15411a56575b2-us17"
        
    }

    const request = https.request(url,options,function(response){
        if (response.statusCode<205) {
            res.sendFile(__dirname+"/success.html")
        }else{
            res.sendFile(__dirname + "/failure.html")
        }
        response.on("data",function(data){
            console.log(JSON.parse(data))
        })
    })
    request.write(jsonData)
    request.end()
})


app.listen(process.env.PORT || 3000,function(){
    console.log("Server Strated")
})


//api key
// 9bd441b13427dcc038e15411a56575b2-us17

//list id
// 0a118f0575