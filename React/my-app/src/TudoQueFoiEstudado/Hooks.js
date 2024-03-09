import React, { useState, useEffect, useMemo, useCallback } from "react";

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

    const quantidadeTarefas = useMemo(()=> tarefas.length, [tarefas]);
    
    
    const handleAdd = useCallback(() => {
        if(input === ""){
            errorInput();
        }else{
            setTarefas([...tarefas, input]);
            setInput("");
        }
    },[tarefas, input]);

    const errorInput = () => {
        alert("Ops, algo deu errado");
    }

    return(
        <div>
            <ul>
            {tarefas.map((tarefas) => (<li key={tarefas}>{tarefas}</li>))}
            </ul>
            <strong>Voce tem {quantidadeTarefas} Taferas</strong><br/>
            <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
            <button type="button" onClick={handleAdd}>Adicionar</button>
        </div>
    );
}

export default App;