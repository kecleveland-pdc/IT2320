$(function() {

    //attach event to each button

    //set div styles for containers and box
    $("#canvas").height(800).width(1000).css({"margin" : "0 auto",});
    $("#main-div").height(500).width(700).css({"background-color" : "#d18cbc","margin" : "0 auto",})
    $("#button-content").css({"text-align" : "center", "margin-top" : "20px", "margin-bottom" : "20px",});
    $("#main-box").height(100).width(100).css({"background-color" : "#0ffeff", "position" : "absolute",});


    let position = $("#main-box").position(); //main-box position
    let originalPosition = $("#main-box").offset(); 
    let stopBlink = null;
    console.log("Left: " + position.left + " Top: " + position.top)

    //animations
    //up
    $("#button-1").on("click", function(){
        let position = $("#main-box").position(); //main-box position
        $("#main-box").animate({top : "-=20%"});
        console.log(position.top);
    });

    //down
    $("#button-2").on("click", function(){
        let position = $("#main-box").position(); //main-box position
        $("#main-box").animate({top : "+=20%"});
        console.log(position.top);
    });

    //left
    $("#button-3").on("click", function(){
        let position = $("#main-box").position(); //main-box position
        $("#main-box").animate({left : "-=20%"});
        console.log(position.left) 
    });

    //right
    $("#button-4").on("click", function(){
        let position = $("#main-box").position(); //main-box position
        $("#main-box").animate({left : '+=20%'});
        console.log(position.left)
    });

    //fadeout
    $("#button-5").on("click", function(){
        $("#main-box").fadeOut();
    });

    //fadein
    $("#button-6").on("click", function(){
        {
            event.preventDefault();
        }

        $("#main-box").fadeIn();
    });

    //blink
    $("#button-7").on("click", function(){
        stopBlink = setInterval(function(){
            $("#main-box").fadeOut("fast").fadeIn("fast");
        }, 500);
    });

    //reset
    $("#button-8").on("click", function(){
        const offset = $("#main-div").offset();
        clearInterval(stopBlink);
        let position = $("#main-box").position(); //main-box position
        $("#main-box").css({top: originalPosition.top, left: originalPosition.left });
        console.log(position.top);
    });
});