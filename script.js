"use strict";

const messageEl = document.querySelector(".message");
const body = document.querySelector("body");
const number = document.querySelector(".number");
const highscoreEl = document.querySelector(".highscore");
const check = document.querySelector(".check");
const scoreEl = document.querySelector(".score");
const guessEl = document.querySelector(".guess");

const secretNumber = Math.trunc(Math.random() * 5) + 1;

let score = 5;
let highscore = 0;



check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  /**Tahmin girilip girilmediğini kontrol etme:
   *tahmin girilmediyse boş string döndürülür biz onu numbera çevirdiğimiz için 0
    0 olarak döndü
   */
  if (guess === 0) {
    messageEl.textContent = "no input";
  }
  else if(guess === secretNumber){//sayıyı bulduk
    messageEl.textContent = "EVET BİLDİNİZ";
    body.style.backgroundColor = "rgba(0,255,0)";
    number.textContent = secretNumber;
    highscore = highscore > score ? highscore : score;
    highscoreEl.textContent = highscore;
  }
  else{
    if(guess > secretNumber){
      message.textContent = "HIGH";
    }
    if(guess < secretNumber){
      message.textContent = "LOW";
    }

    score--;
    scoreEl.textContent = score;

    if(score === 0){
      number.textContent = secretNumber;
      body.style.backgroundColor = "rgba(255,0,0)";
      message.textContent = `IDIOT ALERT!!! ANSWER WAS ${secretNumber}`;
      check.disabled = true;
    }
  }
});


document.querySelector(".again").addEventListener("click", function(){
  body.style.backgroundColor = "#222";
  score = 5;
  message.textContent = "Start guessing..."
  number.textContent = "?";
  check.disabled = false; 
  scoreEl.textContent = score;
  guessEl.value = "";
});