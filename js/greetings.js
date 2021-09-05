const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const title = document.getElementById("title__initialscreen");
const greetingTodoForm = document.getElementById("todo-form");
const greetingQuote = document.querySelector(".quote");
const greetingClock = document.getElementById("clock");
const weather = document.getElementById("weather");
const image = document.querySelector(".image");
const backgroundBox = document.querySelector(".background-box");
const graffiti = document.querySelector(".graffiti");

const CLASSNAME_HIDDEN = "hidden";
const KEY_USERNAME = "username";
const ANI_MOVEINDOWN = "ani-moveindown";

const SAVE_PLACEHOLDER = loginInput.placeholder;

function focusLoginForm() {
  loginInput.placeholder = "";
}
function blurLoginForm() {
  loginInput.placeholder = SAVE_PLACEHOLDER;
}

function paintMainScreen() {
  greeting.classList.remove(CLASSNAME_HIDDEN);
  title.classList.add(CLASSNAME_HIDDEN);
  loginForm.classList.add(CLASSNAME_HIDDEN);
  greetingTodoForm.classList.remove(CLASSNAME_HIDDEN);
  greetingQuote.classList.remove(CLASSNAME_HIDDEN);
  greetingClock.classList.remove(CLASSNAME_HIDDEN);
  weather.classList.remove(CLASSNAME_HIDDEN);
  image.classList.remove(CLASSNAME_HIDDEN);
  graffiti.classList.remove(CLASSNAME_HIDDEN);
  backgroundBox.classList.remove("background-box__initialscreen");
}
function aniPaintMainScreen() {
  greeting.classList.add(ANI_MOVEINDOWN);
  greetingClock.classList.add(ANI_MOVEINDOWN);
  weather.classList.add(ANI_MOVEINDOWN);
  greetingTodoForm.classList.add(ANI_MOVEINDOWN);
  graffiti.classList.add("ani-moveinup");
  greetingQuote.classList.add("ani-quotes_box");
  image.classList.add("ani-image_box");
}

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(KEY_USERNAME, username);
  title.classList.add("ani-moveup");
  loginForm.classList.add("ani-movedown");
  setTimeout(paintGreeting, 1200, username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}!`;
  paintMainScreen();
  aniPaintMainScreen();
}

const savedUsername = localStorage.getItem(KEY_USERNAME);

if (savedUsername === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreeting(savedUsername);
}

loginInput.addEventListener("focus", focusLoginForm);
loginInput.addEventListener("blur", blurLoginForm);
