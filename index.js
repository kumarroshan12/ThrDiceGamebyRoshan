var randomnumber1=Math.floor(Math.random() * 6) + 1;
var dicename="images/" + "dice" + randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",dicename);

var randomnumber2=Math.floor(Math.random() * 6) + 1;
var dicename2="images/" + "dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",dicename2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins. YAY🤩" ;
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins. HooRah🥳"   ;
}
else 
{
    document.querySelector("h1").innerHTML="Draw😶";
}