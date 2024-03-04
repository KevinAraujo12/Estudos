const kevin = document.querySelector(".kevin-skate");
console.log(kevin);

const jump = () => {
    kevin.classList.add("jump");

    setTimeout(() => {
        kevin.classList.remove("jump");
    }, 500);
} 

document.addEventListener("keydown", jump);

