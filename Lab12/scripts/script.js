$(function() {
    console.log( "ready!" );
    $("#nav").click(function(){
        console.log("clicked");
        if(nav.className === "navigation-header"){
            nav.className += " responsive";
        } else{
            nav.className = "navigation-header";
        }
    });
});