setTimeout(TimeModal,5000);

 function TimeModal() {
    document.querySelector(".modal").style.display = "block";
}
function FecharModal(){
    document.querySelector(".modal").style.display = "none";
}

if( document.forms["formModal"] != undefined ){
    
    var form = document.forms["formModal"];
    
    form.addEventListener("submit", ValidacaoForm);
    form.email.addEventListener("keyup", function(){
        form.email.className = "";
        document.querySelector(".modal form span").style.display = "none";
    });
} 

function ValidacaoForm(e) {
    var form = document.forms["formModal"];

    var campoEmail = form.email;
    var valorEmail = form.email.value;
    var valorDoArroba = valorEmail.indexOf("@");

    if ( valorEmail != "" && valorEmail.indexOf("@") > 3 && valorEmail.lastIndex("." > valorDoArroba ) )
    {
        FecharModal();
    }
    else {

        e.preventDefault();

        campoEmail.className= "EmailInvalido";

        document.querySelector(".modal form span").style.display = "block";

    }
}