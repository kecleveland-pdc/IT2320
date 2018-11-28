var ctx;
var c;
var endAngle = 0.1;
var x= 100;
var animation; 

window.onload=function(){

    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");    

    document.getElementById("path").addEventListener("click",function(){
        drawPath();   
    });

    document.getElementById("rectangle").addEventListener("click",function(){
        drawRectangles();   
    });

    document.getElementById("house").addEventListener("click",function(){
        drawHouse();
    });

    document.getElementById("circle").addEventListener("click",function(){
        drawCircle();   
    });

    document.getElementById("arc").addEventListener("click",function(){
        drawArc();   
    });

    document.getElementById("movingCircle").addEventListener("click",function(){
        drawMovingCircle();   
    });

    document.getElementById("stopAnimation").addEventListener("click",function(){
        clearInterval(animation);   
    });

    document.getElementById("randomPath").addEventListener("click",function(){
        drawRandomPath();  
    });

    document.getElementById("triangle").addEventListener("click",function(){
        drawTriangle();  
    });

    document.getElementById("roundedSquare").addEventListener("click",function(){
        drawRoundedSquare(); 
    });
    
}


function drawPath()
{
    ctx.clearRect(0,0,1000,1000);//Reset canvas to blank canvas 
    ctx.resetTransform();

    x=10; y=10;
    x1=300; y1=500;
    x2=50; y2=50;
    x3=600; 

    var grad = ctx.createLinearGradient(0,0,1000,1000);
    grad.addColorStop(0,"red");
    grad.addColorStop(0.2,"blue");
    grad.addColorStop(0.4,"green");
    grad.addColorStop(0.6,"yellow");
    grad.addColorStop(1,"purple");
    ctx.strokeStyle=grad;   
    ctx.lineWidth=4;
    for (i=0;i<6;i++)
    {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x1,y1);   
        ctx.lineTo(x2,y1);    
        ctx.lineTo(x3,y2);
        ctx.closePath();  
        ctx.stroke();
        x1=x1+50;
        y1=y1-50;
        x2=x2-10;
        y2=y2+10;
        x3=x3+10;

    }
}

function drawRectangles()
{
        ctx.clearRect(0,0,1000,1000);//Reset canvas to blank canvas 
        ctx.resetTransform();
    
        var my_gradient=ctx.createLinearGradient(0,0,200,200);
        my_gradient.addColorStop(0,"blue");
        my_gradient.addColorStop(0.5,"green");
        my_gradient.addColorStop(1,"red");
        ctx.fillStyle=my_gradient;    
        ctx.fillRect(0,0,150,100);

        var my_gradient=ctx.createLinearGradient(0,400,400,400);
        my_gradient.addColorStop(0,"lightblue");
        my_gradient.addColorStop(0.5,"purple");
        my_gradient.addColorStop(1,"yellow");
        ctx.fillStyle=my_gradient;    
        ctx.fillRect(100,100,150,100);
    
        var my_gradient=ctx.createLinearGradient(0,800,800,800);
        my_gradient.addColorStop(0,"yellow");
        my_gradient.addColorStop(0.5,"red");
        my_gradient.addColorStop(1,"maroon");
        ctx.fillStyle=my_gradient;
        ctx.fillRect(200,200,150,150);
        ctx.clearRect(230,230,50,50);   
}
function drawHouse()
{
    
    ctx.clearRect(0,0,1000,1000);//Reset canvas to blank canvas        
    ctx.resetTransform();
    
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.moveTo(200,50);
    ctx.lineTo(50,100);
    ctx.lineTo(350,100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillRect(75,100,250,200);
    ctx.clearRect(100,150,20,30);       
    ctx.clearRect(160,200,75,95);
}


function drawCircle()
{
    ctx.clearRect(0,0,1000,1000);//Reset canvas to blank canvas 
    ctx.resetTransform();
    
   //Notice that by changing the end Angle I am able to display 
   //portions of the circle

    ctx.strokeStyle = "#FF0000";
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(50,50,50,0.0*Math.PI,0.5*Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    

    ctx.strokeStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(250,50,50,0*Math.PI,1*Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(50,200,50,0*Math.PI,1.5*Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(250,200,50,0*Math.PI,2*Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
   
}

function drawArc()
{
    ctx.clearRect(0,0,1000,1000);//Reset canvas to blank canvas 
    ctx.resetTransform();
    
    ctx.clearRect(0,0,1000,1000);//Reset canvas to blank canvas        
    ctx.beginPath(); 
    ctx.moveTo(20,20);           // Create a starting point
    ctx.lineTo(100,20);          // Create a horizontal line
    ctx.arcTo(150,20,150,70,50); // Create an arc
    ctx.lineTo(150,120);         // Continue with vertical line
    ctx.stroke();                // Draw it
}


function drawMovingCircle()
{     
    animation =   setInterval(drawCircleAnimation,100);
}

function drawCircleAnimation()
{
      
    ctx.clearRect(0,0,1000,1000);//Reset canvas to blank canvas 
    ctx.strokeStyle = "#FF0000";
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(50,50,50,0.0*Math.PI,endAngle * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    endAngle = ((endAngle*10) +(0.1*10))/10;
    if (endAngle == 2.0)
    {    
        endAngle = 0.1;
        ctx.clearRect(0,0,1000,1000);//Reset canvas to blank canvas 
    }   
}

function drawTriangle(){
    console.log("clicked");
    ctx.clearRect(0,0,1000,1000);//Reset canvas to blank canvas 
    ctx.resetTransform();
    ctx.strokeStyle = "#0000FF";
    ctx.clearRect(0,0,1000,1000);//Reset canvas to blank canvas        
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(25, 200);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(210, 200);
    ctx.lineTo(300, 400);
    ctx.lineTo(275, 25);
    ctx.closePath();
    ctx.stroke();
}

function drawRandomPath(){
    ctx.clearRect(0,0,1000,1000);
    c = document.getElementById("myCanvas");
    let rand1= c.width*Math.random();
    let rand2 = c.width*Math.random();
    let rand3= c.width*Math.random();
    let rand4 = c.width*Math.random();
    let rand5 = c.width*Math.random();
    let rand6 = c.width*Math.random();
    let rand7 = c.width*Math.random();

    ctx.strokeStyle = "#0000FF";
    ctx.beginPath();
    ctx.moveTo(rand1,rand2);
    ctx.lineTo(rand1,rand3);
    ctx.lineTo(rand3,rand4) 
    ctx.lineTo(rand4,rand5) 
    ctx.lineTo(rand5,rand6) 
    ctx.lineTo(rand6,rand7) 
    ctx.stroke();

}
function drawRoundedSquare(){
    ctx.clearRect(0,0,1000,1000);//Reset canvas to blank canvas 
    ctx.resetTransform();
    ctx.strokeStyle = "#0000FF";
    ctx.moveTo(20,50);
    ctx.stroke();        
}