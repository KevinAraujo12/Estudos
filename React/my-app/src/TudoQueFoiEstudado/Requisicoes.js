import React, { useState, useEffect } from "react";
import './style.css';

// https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
    const [nutri, setNutri] = useState([]);
    

    useEffect(() => {
        const loadApi = () => {
            let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
            fetch(url)
            .then((r) => r.json())
            .then((json) => {
            setNutri(json);
            })
        }

        loadApi();
    }, [])

    return(
         <div className="container">
           <header>
            <strong>React Nutri</strong>
           </header>
           {nutri.map((i) => {
            return (
                <article key={i.id} className="post">
                    <strong className="titulo">{i.titulo}</strong>
                    <img src={i.capa} alt={i.titulo} className="capa"/>
                    <p className="subtitulo">
                        {i.subtitulo}
                    </p>
                    <a className="botao">Acessar</a>
                </article>
            );
           })}
         </div>
    );
}

export default App;