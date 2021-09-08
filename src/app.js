/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let deck = ["♦", "♥", "♣", "♠"];
  let card = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "k"];

  let random_deck = deck[Math.floor(Math.random() * deck.length)];
  let random_number = card[Math.floor(Math.random() * card.length)];

  let result = [random_deck];
  let result2 = [random_number];

  for (let element of result) {
    console.log(element);
    if (element == "♣" || element == "♠") {
      console.log("black");
      document.querySelector(".top").style.color = "black";
      document.querySelector(".bottom").style.color = "black";
    } else {
      console.log("red");
    }
  }

  document.querySelector(".top").innerHTML = result;
  document.querySelector(".bottom").innerHTML = result;
  document.querySelector(".number").innerHTML = result2;
};
