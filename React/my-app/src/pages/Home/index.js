import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>Bem Vindo a minha pagina Home</h1><br/><br/>
            <Link to="/sobre">Ir para a pagina sobre</Link><br/> <br/>
            <Link to="/contato">Ir para a pagina de contato</Link>

            <hr/>

            <Link to="/produto/123456789">Acessar produto</Link>
        </div>  

    );
}

export default Home;
