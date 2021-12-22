const loginForm = document.getElementById("Login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    greeting.innerText = `Hello ${username}`;
   paintGreetings(username);
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event)
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

link.addEventListener("click", handleLinkClick)

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
}