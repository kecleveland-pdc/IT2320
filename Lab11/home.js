
$(function(){

//jQuery code goes here
    $("#btn1").on("click", function(){
        var url = "https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?&tags="
                    +$("#photosearch").val();   
       $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",   //needed for CORS       
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                   
           success: function(data){
              console.log(data);             
              $.each(data.items, function(i, item){                
                var img = $("<img></img>");
                img.attr("src",item.media.m);
                $("#flikrresults").append(img);
              });              
           }
         });
    });

    $("#btn2").on("click", function(){
        const key = "551b527add03634ac3a95a7a967367e6";           
        var animal = $("#breedsearch").val();
        var url = "http://api.petfinder.com/breed.list?format=json&key="+key+"&callback=?&animal="+animal+"&format=json";
       $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",   //needed for CORS       
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                   
           success: function(data){              
              console.log(data);
              $("ul").remove();
              var ul = $("<ul>Breeds</ul>");
              $("#breedresults").append(ul);
              
              $.each(data.petfinder.breeds.breed,function(i,breed){                  
                    var li = $("<li></li>").text(breed.$t);
                    $("ul").append(li);
              });                      
            }                     

         });//ajax  
    });  //btn click

    //test
    $("#submit").click(function(e){
        //Go to https://www.petfinder.com/developers/api-key to get an api key
        //Add the API key to the URL
        //PetFinder API Key 7ca41b0ec396887de2e110e7a3c60b80
        //PetFinder API Secret 10a153f11c80453bb7564cbd501fadef
        e.preventDefault();

        const key = "7ca41b0ec396887de2e110e7a3c60b80"; 
        var location = $("#zipcode").val()
        var size = $("#size").val();
        var sex = $("#sex").val();
        var animal = $("#animal").val();        
        var breed = $("#breed").val();
        var url = "http://api.petfinder.com/pet.find?callback=?&format=json&key="+key+"&callback=?&location="+location+"&size="+size+"&sex="+sex+"&breed="+breed+"&animal="+animal+"&_=&format=json";
        console.log(url);
        console.log(location);
       $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",      
           contentType: "application/json; charset=utf-8",
           crossDomain: true,  
           //processData: true,                 
           success: function(data){              
              console.log(data);
              var div = $('<div id="result-div"><div>')
              $.each(data.petfinder.pets.pet,function(i,pet){ 
                var p = $('<p></p>').append('<strong>Name: </strong>' + pet.name.$t);
                var description = $('<p></p>');
                $(div).append(p);
              });  
              $("#results").html(div);              
            }   
         });//ajax  
    });  //btn click
})