const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];
  
const giveMeColor = document.querySelector('#Color-Button');
const n = colors.length

function clickButton(){
    const color1 = colors[Math.floor(Math.random()*n)];
    const color2 = colors[Math.floor(Math.random()*n)];
    console.log(document.body.style.backgroundColor)
    document.body.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
}
clickButton();
giveMeColor.addEventListener('click', clickButton);