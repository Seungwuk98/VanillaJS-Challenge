const loginForm = document.getElementById("Login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting")
const greeting_form = document.querySelector("#greeting-Form")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

const date = new Date();
const hour = date.getHours();
let time = 0;
if (6<=hour && hour<10) {
    time = "morning";
} else if(10<=hour && hour<17){
    time = "afternoon"
} else if(17<=hour && hour<20){
    time = "evening"
} else{
    time = "night"
}

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Good ${time}, ${username}`;
    paintGreetings(username);
}


function paintGreetings(username){
    greeting.innerText = `Good ${time}, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting_form.classList.remove(HIDDEN_CLASSNAME)
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
}