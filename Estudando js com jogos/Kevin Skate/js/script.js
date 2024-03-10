const kevin = document.querySelector(".kevin-skate");
const cone = document.querySelector(".cone");

let contador = 0;
const jump = () => {
    kevin.classList.add("jump");
    const contadorElemento = document.getElementById("Contador"); 
    
    contador = contador + 1;
    setTimeout(() => {
        kevin.classList.remove("jump");
    }, 500);
     console.log(contador);
     contadorElemento.textContent = contador;
} 

loop = setInterval(() => {

    const conePosition = cone.offsetLeft; 
    const kevinPosition = +window.getComputedStyle(kevin).bottom.replace("px", "");
    
    if (conePosition <= 120 && conePosition > 0 && kevinPosition < 120) {
        
        cone.style.animation = "none";
        cone.style.left = `${conePosition}px`;
        
    }
    
},10);

// contador de cones pulados




document.addEventListener("keydown", jump);


