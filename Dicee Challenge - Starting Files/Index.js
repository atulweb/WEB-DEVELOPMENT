// For Player 1
var RandomNumber1 = Math.floor(Math.random()*6)+1; // 1-6 random number

var RandomDiceImage = "dice" + RandomNumber1 + ".png"; //dice1.png to dice6.png

var randomImageSource = "images/" + RandomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



// For Player 2

var RandomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" +RandomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

