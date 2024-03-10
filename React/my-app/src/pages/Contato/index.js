import { Link } from "react-router-dom";

function Contato (){
    return(
        <div>
            <h1>Pagina de contato</h1>
            <span>Contato da empresa (dd) xxxx-xxxx</span> <br/> <br/>
            <Link to="/sobre">Ir para a pagina sobre</Link><br/> <br/>
            <Link to="/">Ir para a pagina de Home</Link>
        </div>
    );
}

export default Contato;