var buttonColours = ["red","blue","green","yellow"]

var gamePattern = []

var userClickedPattern = []

var started = false

var level = 0


function nextSequence(){
    userClickedPattern = []
    level++
    $("h1").text("Level "+level)
    var randomNumber = Math.floor(Math.random()*4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
    
}

$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
})

function playSound(key){
    new Audio("sounds/"+key+".mp3").play()
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    },100)
}

$("body").keypress(function(event){
    if (!started) {
        if (event.key == "a") {
            $("h1").text("Level "+level)
            nextSequence()
            started = true
        }
    }
})

function checkAnswer(currentLevel){

    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    }else{
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
         },200)
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
    }

}

function startOver(){
    level = 0
    gamePattern = []
    started = false
}