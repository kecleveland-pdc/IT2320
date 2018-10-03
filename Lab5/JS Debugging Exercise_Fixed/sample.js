function displayFruits()
{
    //Find the bug(s) in the code
    //We've classified fruits into 3 categories
    //We want all thh fruits to display in their right category
    //tropical:coconut, orange,grapefruit,pineapple,banana
    //subtropical:avocado,guava
    //not tropical:apple, grapes, kiwi, watermelon
    
    document.getElementById("display-panel").innerHTML="";

    const fruits = ["apple","orange","banana","grapes","guava","coconut","grapefruit","kiwi","watermelon","pineapple","avocado"];
    let displayText = "";

    for (let i = 0; i <= fruits.length - 1; i++)
    {
        displayText += "<p>"+ fruits[i];    
        displayText += " is "+ IsTropical(fruits[i]);
        displayText += "</p>";        
    }
    document.getElementById("display-panel").innerHTML = displayText;

}

function IsTropical(fruit)
{
    let tropicalMsg;

     switch (fruit){
        case "coconut":
        case "orange": 
        case "grapefruit": 
        case "pineapple": 
        case "banana":
            tropicalMsg = "tropical"
            break;
        case "avocado":
        case "guava":
            tropicalMsg = "subtropical";
            break;
        case "apple":
        case "grapes":
        case "kiwi":
        case "watermelon":
            tropicalMsg = "not tropical";
            break;
        default:
            tropicalMsg = "unable to determine fruit type";         
    }
   
    return tropicalMsg;
}

function AddNumbers()
{
    const numbers = [2, 4, 6, 8, 10, 12, 14];
    let sum = 0;

    document.getElementById("display-panel").innerHTML = "";

    for (let i = 0; i <= numbers.length-1; i++)
    { 
        sum += numbers[i];
    }
    
    document.getElementById("display-panel").innerHTML = `Sum of numbers ${numbers} is equal to ${sum}`; 
    
}

function EvenOrOddCalc()
{    
    var evenOddFlag = EvenOrOdd();
    console.log(evenOddFlag);
}

function EvenOrOdd()
{    
    document.getElementById("display-panel").innerHTML = "";

    const evenOdd = [13, 4, 2, 67, 94, 35, 654];
    let even = "";
    let odd = "";
    let i = 0;
    let flag = 0;

   for(let i = 0; i <= evenOdd.length - 1; i++)    
   {
        flag = evenOdd[i] % 2;

        if (flag === 0)
            even += `${evenOdd[i]} `;
        else
            odd += `${evenOdd[i]} `;
        
    };

    document.getElementById("display-panel").innerHTML = `<p>Given numbers: ${evenOdd} </p>`;
    document.getElementById("display-panel").innerHTML +=  `<p>Even: ${even} Odd: ${odd} </p>`
    
    return true;
}


function GenerateNumbers()
{
    //There are 9 prime numbers and 10 odd numbers.Fix the bugs so the right count displays

    var num = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var factorFound;
    var prime=0;
    for (i=0;i<num.length;i++)
    {  
        
        if (num[i] == 2)
            prime++;
        else
        {
            for (j=2;j<num[i];j++) //Check from 2 to num-1 and see if the number has factors other than 1 and itself
            {
                if ((num[i] % j)==0)                 
                    factorFound++;                    
            }
        
            if (!factorFound) //No factors
                prime++;
        }

        var odd=0;
        if (num[i]%2 != 0)
            odd++;

   }
    document.getElementById("display-panel").innerHTML="Given array "+num;
    document.getElementById("display-panel").innerHTML+=" Prime count = "+prime;
    document.getElementById("display-panel").innerHTML+=" Odd count "+ odd;
}