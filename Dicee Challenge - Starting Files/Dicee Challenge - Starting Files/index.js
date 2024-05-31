var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

if(randomNumber1===1){
  document.querySelector(".dice .img1").setAttribute("src" ,"images/dice1.png");
}
else if (randomNumber1===2){
  document.querySelector(".dice .img1").setAttribute("src" ,"images/dice2.png");
}
else if (randomNumber1===3){
  document.querySelector(".dice .img1").setAttribute("src" ,"images/dice3.png");
}
else if (randomNumber1===4){
  document.querySelector(".dice .img1").setAttribute("src" ,"images/dice4.png");
}
else if (randomNumber1===5){
  document.querySelector(".dice .img1").setAttribute("src" ,"images/dice5.png");
}

if(randomNumber2===1){
  document.querySelector(".dice .img2").setAttribute("src" ,"images/dice1.png");
}
else if (randomNumber2===2){
  document.querySelector(".dice .img2").setAttribute("src" ,"images/dice2.png");
}
else if (randomNumber2===3){
  document.querySelector(".dice .img2").setAttribute("src" ,"images/dice3.png");
}
else if (randomNumber2===4){
  document.querySelector(".dice .img2").setAttribute("src" ,"images/dice4.png");
}
else if (randomNumber2===5){
  document.querySelector(".dice .img2").setAttribute("src" ,"images/dice5.png");
}


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player1 Won!!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player2 Won!!🚩";
}
else{
  document.querySelector("h1").innerHTML = "🚩It's a draw!!🚩";
}
