const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
const toDoButton = document.getElementById("todo");
const getStart = document.getElementById("todo-form__get-start");
const newButton = document.getElementById("new-Todo");
const toDo = document.getElementById("todo");
const toDoFrame = document.getElementById("todo-frame")

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}


function deleteToDo(event){
    const li = event.target.parentElement;
    const id = li.id;
    const ul = li.parentElement;
    li.remove();
    ulChildren = ul.querySelector("li")
    if (!ulChildren){
        newButton.classList.remove(HIDDEN_CLASSNAME)
        getStart.classList.remove(HIDDEN_CLASSNAME)
        toDoInput.classList.add(HIDDEN_CLASSNAME)
    }
    toDos = toDos.filter((item) =>  item.id != parseInt(id, 10));
    saveToDos();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = 'X';
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDoObj.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id:Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
    newButton.classList.add(HIDDEN_CLASSNAME)
    getStart.classList.add(HIDDEN_CLASSNAME)
    toDoInput.classList.remove(HIDDEN_CLASSNAME)
    toDoForm.classList.add('todo-form__sizing');
} 

function handleClickGetStart(){
    newButton.classList.add(HIDDEN_CLASSNAME)
    getStart.classList.add(HIDDEN_CLASSNAME)
    toDoInput.classList.remove(HIDDEN_CLASSNAME)
    toDoForm.classList.add('todo-form__sizing');
}

newButton.addEventListener("click", handleClickGetStart);

function showTodo(){
    if (toDoFrame.style.display == "flex"){
        toDoFrame.style.display = "none";
    } else{
        toDoFrame.style.display = "flex";
    }
}

toDo.addEventListener("click", showTodo)