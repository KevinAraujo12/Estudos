 import { useParams } from "react-router-dom";

function Produto(){

    const { id } = useParams();

    return (
        <div>
            <h2>Pagina do meu produto</h2>
            MEU PRODUTO E {id}
        </div>
    )
}

export default Produto;