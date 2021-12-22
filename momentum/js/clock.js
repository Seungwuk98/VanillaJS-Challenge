const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')}`;
}

getClock();
setInterval(getClock, 1000);