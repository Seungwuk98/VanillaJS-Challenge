const HIDDEN_CLASSNAME = "hidden";

const generaterForm = document.querySelector("#Generater");
const generaterInput = document.querySelector("#Generater input")
const guessForm = document.querySelector("#Guess");
const guessInput = document.querySelector("#Guess input");
const showForm = document.querySelector("#Show");
const userResult = document.querySelector("#User-Result");
const machineResult = document.querySelector("#Machine-Result");
const You = document.querySelector("#You");

function generaterSubmit(event){
    event.preventDefault();
}

generaterForm.addEventListener("submit",generaterSubmit);

function guessSubmit(event){
    event.preventDefault();
    const range = parseInt(generaterInput.value);
    if (range === NaN){
        alert("please write a number in Generater");
        return;
    } else if ( range < 0){
        alert("please give me a positive number");
        return;
    }
    const guessNumber = parseInt(guessInput.value);
    if (guessNumber === NaN){
        alert("please write a number in Guess");
        return;
    } else if ( guessNumber < 0){
        alert("please give me a positive number");
        return;
    } else if (guessNumber > range){
        alert("You never win.. (Bigger than limit)");
        return;
    }
    if (showForm.classList.contains(HIDDEN_CLASSNAME)){
        showForm.classList.remove(HIDDEN_CLASSNAME);
    }
    const machineNumber = Math.ceil((Math.random()*range))
    userResult.innerText = guessNumber;
    machineResult.innerText = machineNumber;
    if (You.classList.contains(HIDDEN_CLASSNAME)){
        You.classList.remove(HIDDEN_CLASSNAME);
    }
    if (guessNumber === machineNumber){
        You.innerText = 'You win!';
    } else {
        You.innerText = "You Lost!";
    }

}

guessForm.addEventListener("submit", guessSubmit)