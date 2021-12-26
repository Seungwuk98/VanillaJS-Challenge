const focusForm = document.querySelector("#focus-form");
const focusText = document.querySelector("#focus-text");
const focusInput = document.querySelector("#focus-input");
const focusFrame = document.querySelector("#focus-frame")
const foucsDelete = document.querySelector("#focus-button")

const FOCUS_KEY = "focus"

const savedFocus = localStorage.getItem(FOCUS_KEY);

function submitFocusForm(event){
    event.preventDefault();
    focusForm.classList.add(HIDDEN_CLASSNAME);
    const text = focusInput.value;
    focusFrame.style.display = 'flex';
    focusText.innerText = text;
    localStorage.setItem(FOCUS_KEY, text);
}

focusForm.addEventListener("submit", submitFocusForm);

if(savedFocus){
    focusForm.classList.add(HIDDEN_CLASSNAME);
    focusText.innerText = savedFocus;
    focusFrame.style.display = 'flex';
} else{
    focusFrame.style.display = 'none';
}   

function clickFocusDelete(){
    focusForm.classList.remove(HIDDEN_CLASSNAME);
    focusText.innerText = "";
    focusFrame.style.display = 'none';
    localStorage.removeItem(FOCUS_KEY);
}

foucsDelete.addEventListener("click", clickFocusDelete);