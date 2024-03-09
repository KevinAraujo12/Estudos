import React, { useState, useEffect } from "react";

function App(){

    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState("");

    useEffect(()=> {
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }, [tarefas]);

    useEffect(() => {
        const storageTarefas = localStorage.getItem("tarefas"); 
        if(storageTarefas){
            setTarefas(JSON.parse(storageTarefas));
        }
    }, []);



    const handleAdd = () => {
       setTarefas([...tarefas, input]);
       setInput("");
    }

    return(
        <div>
            <ul>
            {tarefas.map((tarefas) => (<li key={tarefas}>{tarefas}</li>))}
            </ul>
            <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
            <button type="button" onClick={handleAdd}>Adicionar</button>
        </div>
    );
}

export default App;