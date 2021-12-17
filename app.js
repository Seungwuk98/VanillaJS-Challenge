

function handleWindowResize(){
    const windowSize = window.outerWidth;
    if (windowSize > 1300){
        document.body.style.backgroundColor = "teal";
    } else if (windowSize > 900){
        document.body.style.backgroundColor = "tomato";
    } else{
        document.body.style.backgroundColor = "beige";
    }
    
}


window.addEventListener("resize", handleWindowResize);