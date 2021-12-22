const clock = document.querySelector('#Dday');

const date = new Date();
const Xdate = date.getFullYear().toString() + '/12/25';
let Xmas = new Date(Xdate);


function getDday(){
    const date = new Date();
    second = parseInt((Xmas.getTime() - date.getTime())/1000);
    day = parseInt(second/86400);
    second %= 86400;
    hour = parseInt(second/3600);
    second %= 3600;
    minute = parseInt(second/60);
    second %= 60;
    clock.innerText = `${day}d ${hour.toString().padStart(2,'0')}h ${minute.toString().padStart(2,'0')}m ${second.toString().padStart(2,'0')}`;
    
    const Xdate = date.getFullYear().toString() + '/12/25';
    Xmas = new Date(Xdate);
}

getDday();
setInterval(getDday, 1000);