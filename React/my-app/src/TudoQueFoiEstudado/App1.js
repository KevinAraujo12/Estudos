import React from "react";
// Aqui aprendemos sobre props e component Part1
const Bemvindo = (props) => {
    return (
        <div>
            <h1>Seja bem vindo, {props.name}</h1>
            <h2>Sua idade e {props.idade} Anos</h2>
        </div>
    )
}

function App() {
    return (
        <div>
            Ola mundo!!!!!
            <h1>Esse e meu projeto</h1>
            <Bemvindo name="Kevin" idade="23" />
            <Bemvindo name="Karen" idade="21" />
        </div>
    )
}

export default App;