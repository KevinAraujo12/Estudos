import React, { useState } from "react";


    //API useState !!!! 


function App(){
    // O primeiro parametro que usamos na const e o nome da nossa state e o segundo paremetro e o nome que nos chamar para atualizer a state.
    const [tarefas, setTarefas] = useState(["Pagar a conta de luz", "Estudar react hooks"]);
    const [input, setInput] = useState("");

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