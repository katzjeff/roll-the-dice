var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomDiceImage > randomDiceImage2) {
    document.querySelector('h1').innerHTML = 'Opps...you lost, Try again!';
} else if (randomDiceImage === randomDiceImage2) {
    document.querySelector('h1').innerHTML = 'Its a draw, please try again !';
} else {
    document.querySelector("h1").innerHTML = 'Hurray....you won';
}