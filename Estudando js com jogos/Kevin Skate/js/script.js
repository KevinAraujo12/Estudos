const kevin = document.querySelector(".kevin-skate");
const cone = document.querySelector(".cone");

const jump = () => {
    kevin.classList.add("jump");

    setTimeout(() => {
        kevin.classList.remove("jump");
    }, 500);
} 

loop = setInterval(() => {

    const conePosition = cone.offsetLeft; 
    const kevinPosition = +window.getComputedStyle(kevin).bottom.replace("px", "");
    
    if (conePosition <= 120 && conePosition > 0 && kevinPosition < 120) {

        cone.style.animation = "none";
        cone.style.left = `${conePosition}px`;

    }

},10);

document.addEventListener("keydown", jump);

