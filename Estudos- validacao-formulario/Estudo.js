
form = document.forms["formulario"];

form.addEventListener("submit", EnviarFormulario);

/* Funcao para envio do formulario */
function EnviarFormulario(e){
    form = document.forms["formulario"];
    EnviarFormulario = true;

       
    if (!ValidarEmail(form.email.value) == true){
        form.email.className = "input-red";
        document.querySelector("span").style.display = "block";
        EnviarFormulario = false;
    }if(!ValidarSenha(form.Senha.value) == true) {
        form.Senha.className = "input-red";
        document.querySelector("#span").style.display = "block";
        EnviarFormulario = false;
    }if (EnviarFormulario == false){
        alert("AQIO");
        e.preventDefault();
    }    

    inputs = document.querySelectorAll("form[name=formulario] input[name=Email]");
    for(i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("keypress", function(){
        this.className = "";
        document.querySelector("span").style.display = "none";
    });
    }
    inputs = document.querySelectorAll("form[name=formulario] input[name=text]");
   for(i = 0; i < inputs.length; i++){
   inputs[i].addEventListener("keypress", function(){
       this.className = "";
       document.querySelector("#span").style.display = "none";
   });
   }
}


/* Funcao fechar formulario */
function Fecharform (){
     document.forms["formulario"].style.display = "none"; 
}

/* Funcao para validacao do Email */
function ValidarEmail(email) {
    ValoreEmail = form.email.value;
   
    if (ValoreEmail != "") {
        return true;
    }else {
        return false;
    }
}

/* Funcao para a validacao da senha */
function ValidarSenha(senha){
    ValoresSenha = form.Senha.value;

    if(ValoresSenha != ""){
        return true;
    }else {
        return false;
    }
}
