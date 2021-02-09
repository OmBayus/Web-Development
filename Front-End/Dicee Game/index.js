var randomNumber1 = Math.floor(Math.random()*6+1)
var randomNumber2 = Math.floor(Math.random()*6+1)

var dice1 = document.getElementsByClassName("img1")[0]
var dice2 = document.getElementsByClassName("img2")[0]

var imgage1 = "images/dice"+ randomNumber1 +".png"
var imgage2 = "images/dice"+ randomNumber2 +".png"


dice1.setAttribute("src",imgage1)
dice2.setAttribute("src",imgage2)

var h1 = document.querySelector("h1")

if (randomNumber1>randomNumber2) {
    h1.textContent = "Play 1 Wins!"  
}
else if(randomNumber2>randomNumber1){
    h1.textContent = "Play 2 Wins!"
}
else{
    h1.textContent = "Draw!"
}