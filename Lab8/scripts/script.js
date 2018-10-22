$(function() {

    //attach event to each button

    //set div styles for containers and box
    $("#canvas").height(800).width(1000).css({"margin" : "0 auto",});
    $("#main-div").height(500).width(700).css({"background-color" : "#d18cbc","margin" : "0 auto",})
    $("#button-content").css({"text-align" : "center", "margin-top" : "20px", "margin-bottom" : "20px",});
    $("#main-box").height(100).width(100).css({"background-color" : "#0ffeff", "position" : "absolute",});


    let position = $("#main-box").position(); //main-box position
    let originalPosition = $("#main-box").offset(); 
    let animation = null;
    console.log("Left: " + position.left + " Top: " + position.top)
    console.log("Orig: " + originalPosition.left + "--" + originalPosition.top);

    //animations
    //up
    $("#button-1").on("click", function(){
        clearInterval(animation);
        animation = setInterval(function(){
            $("#main-box").animate({top : "-=10%"});
        }, 500);
    });

    //down
    $("#button-2").on("click", function(){
        clearInterval(animation);
        animation = setInterval(function(){
            $("#main-box").animate({top : "+=10%"});
        }, 500);
    });

    //left
    $("#button-3").on("click", function(){
        clearInterval(animation);
        let curPosition = $("#main-box").position();
        animation = setInterval(function(){
            //clear interval if past container
            $("#main-box").animate({left : "-=10%"});
            curPosition = $("#main-box").position();
            console.log("Cur " + Math.floor(curPosition.left) + " Original: " + Math.floor(originalPosition.left));
        }, 500);
    });

    //right
    $("#button-4").on("click", function(){
        clearInterval(animation);
        animation = setInterval(function(){
            $("#main-box").animate({left : '+=10%'});
        }, 500);
    });

    //fadeout
    $("#button-5").on("click", function(){
        clearInterval(animation);
        $("#main-box").fadeOut();
    });

    //fadein
    $("#button-6").on("click", function(){
        clearInterval(animation);
        $("#main-box").fadeIn();
    });

    //blink
    $("#button-7").on("click", function(){
        clearInterval(animation);
        animation = setInterval(function(){
            $("#main-box").fadeOut("fast").fadeIn("fast");
        }, 500);
    });

    //reset
    $("#button-8").on("click", function(){
        clearInterval(animation);
        const offset = $("#main-div").offset();
        $("#main-box").css({top: originalPosition.top, left: originalPosition.left });
        $("#main-box").show();
    });
});