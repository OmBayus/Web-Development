
var drums = document.getElementsByClassName("drum")
var audio = new Audio('sounds/crash.mp3');

for (let i = 0; i < drums.length; i++) {
    
    drums[i].addEventListener("click", function(){
        
        var buttonHtml = this.textContent
        
        makesound(buttonHtml)
        buttonAnimation(buttonHtml)
    })
    
}
addEventListener("keypress",function(event){
    makesound(event.key)
    buttonAnimation(event.key)
})

function makesound(key) {

    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            break;
    }
    
}

function buttonAnimation(currentKey) {

    var activeButton = document.getElementsByClassName(currentKey)[0]

    activeButton.classList.toggle("pressed")

    setTimeout(function() {

        activeButton.classList.toggle("pressed")
    }, 100);
    
}