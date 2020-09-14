var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var random = document.querySelector("button");

css.textContent =
  "linear-gradient( to right, " + color1.value + ", " + color2.value + ")";

//this changes the background colour by the input
function setGradient() {
  body.style.background =
    "linear-gradient( to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";"; // textContent to insert a text
}

//The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
// setGradient() ,calls and runs the function automatically so we need to only put setGradient, so that when the event occurs the function gets executed.

// random colour generator

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
}

function randomColor() {
  body.style.background =
    "linear-gradient( to right, " +
    random_bg_color() +
    ", " +
    random_bg_color() +
    ")";

  css.textContent = body.style.background + ";";
}

random.addEventListener("click", randomColor);
