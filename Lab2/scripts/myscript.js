function showNews(){
    var news = [
        "NEWS ITEM 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at dui scelerisque elit venenatis imperdiet. Suspendisse metus metus, sagittis eget vulputate id, consectetur id justo. Nunc a massa consectetur, rhoncus tortor eu, venenatis risus. Suspendisse lorem velit, viverra vitae mauris ac, porta pretium nisi. Phasellus urna ligula, tempor nec faucibus quis, interdum et ante. Ut egestas placerat mi ac commodo. Cras in lorem eu tellus rutrum porta. Suspendisse feugiat diam libero, cursus dignissim arcu molestie sit amet. Vivamus non orci ultrices, malesuada libero id, vestibulum leo. Sed ultricies elementum leo sit amet auctor.", 
        "NEWS ITEM 2: Ut tempor nisi libero, ac malesuada est lacinia sit amet. Curabitur felis purus, sagittis molestie nisi vitae, imperdiet sagittis nunc. Praesent vel vestibulum arcu. Aenean eget tellus non purus iaculis gravida et at nisi. Nulla et urna ante. Donec tristique nibh nec ipsum dictum, id volutpat dui ultricies. Nulla quis felis a ipsum pellentesque fringilla ut id turpis. Praesent et lectus in odio suscipit ultricies ut at erat. Aliquam sapien tortor, varius at ante et, euismod mattis urna. Sed at gravida lectus. Vestibulum et leo laoreet orci sollicitudin lacinia a eget massa. Nam blandit magna ac felis congue, et molestie lorem hendrerit.", 
        "NEWS ITEM 3: Phasellus rutrum ex sed felis scelerisque consequat. In condimentum risus purus, sit amet accumsan ante sagittis a. Aenean laoreet convallis libero non hendrerit. Vestibulum ultrices arcu odio, ultricies dictum lectus varius vitae. Maecenas cursus ac turpis in facilisis. Nullam non felis aliquam, convallis lorem eu, efficitur sem. Sed suscipit metus lacus, et fermentum lectus venenatis eget. Donec lobortis eget eros eu blandit. Suspendisse in bibendum felis. Cras hendrerit urna et massa interdum, eu mattis elit congue. Morbi et metus augue. Maecenas nec dolor suscipit, tristique tortor non, dictum arcu. Fusce ultricies sed tellus vel facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed nunc ipsum. Curabitur libero nibh, placerat et nisl eget, egestas porttitor arcu."
        ];
    
    document.getElementById("news").innerHTML = "";

    news.forEach(function(item)
    {
        var listElement = document.createElement("li");
        var paragraphElement = document.createElement("p");
        paragraphElement.innerHTML = item;
        listElement.appendChild(paragraphElement);
        document.getElementById("news").appendChild(listElement);
    });
}

function addSize() {
    var element = document.getElementById("hero");
    element.classList.add("hero-size");
}

function removeSize() {
    var element = document.getElementById("hero");
    element.classList.remove("hero-size");
}

function addColor() {
    var element = document.getElementById("history");
    element.classList.add("addColor");
}

function removeColor() {
    var element = document.getElementById("history");
    element.classList.remove("addColor");
}

function addBackground() {
    var element = document.getElementById("pbg");
    element.classList.add("bg");
}

function removeBackground() {
    var element = document.getElementById("pbg");
    element.classList.remove("bg");
}

function changeColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";

    document.body.style.background = bgColor;
}