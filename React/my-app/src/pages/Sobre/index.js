import { Link } from "react-router-dom";
function Sobre(){
    return(
        <div>
            <h1>Pagina sobre a empresa</h1><br/><br/>
            <Link to="/">Pagina Home</Link><br/><br/>
            <Link to="/contato">Ir para a pagina de contato</Link>
        </div>
    );
}

export default Sobre;
