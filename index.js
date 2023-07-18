var num1=Math.floor(Math.random()*6)+1; //1-6


var diceimage="images/dice" + num1+".png"; 

var image1=document.querySelectorAll("img")[0]

image1.setAttribute("src",diceimage);




var num2=Math.floor(Math.random()*6)+1;

var diceimage2="images/dice"+num2+".png";

document.querySelectorAll("img")[1].setAttribute("src",diceimage2);

if(num1>num2){
  document.querySelector("h1").innerHTML="玩家1勝利";
}else if(num1<num2){
    document.querySelector("h1").innerHTML="玩家2勝利";
}else{
    document.querySelector("h1").innerHTML="雙方平手";
}