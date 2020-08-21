var number1= Math.floor(Math.random()*6)+1;
var dice1= "dice"+number1+".png";
var image1= document.querySelector("#player1");
image1.setAttribute("src",dice1);

var  number2= Math.floor(Math.random()*6)+1;
var dice2= "dice"+number2+".png";
var image2= document.querySelector("#player2");
image2.setAttribute("src",dice2);

if(number1>number2){
    document.querySelector("h1").innerHTML="Player 1 Wins ! 🏆"
}
else if(number1<number2){
    document.querySelector("h1").innerHTML="Player 2 Wins ! 🏆"
}
else{
    document.querySelector("h1").innerHTML="It's a Draw ! 🙄"
}