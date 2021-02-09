$("img").slideUp()

$("button").on("click",function(){
        $("img").slideDown().animate({left:1920},1000)
        setTimeout(function(){
            $("img").css("transform","rotate(-90deg)")
        },1500)
        $("img").animate({left:0},1000)
        $("img").css("transform","rotate(-270deg)")
        $("img").slideUp(500,function(){
            $("h1").text("Mission Completed")
            $("h1").css("color","red")
        })
})
