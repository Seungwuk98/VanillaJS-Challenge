const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}


function deleteToDo(event){
    const li = event.target.parentElement;
    const id = li.id;
    li.remove();
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
}