import React from "react";
// Aqui continuamos o aprendizado de props e component
const Equipe = (props) => {
    return (
        <div>
            <Sobre name={props.name} cargo={props.cargo} idade={props.idade}/> 
            <Social fb={props.facebook} yt={props.youtube} lk={props.linkedin}/>
            <hr></hr>
        </div>
    );
}

const Sobre = (props) => {
    return (
    <div>
        <h2>Meu nome e {props.name}.</h2>
        <h3>Meu cargo e  {props.cargo}.</h3>
        <h3>Minha idade e {props.idade}.</h3>
    </div>
    )
}

const Social = (props) => {
    return (
        <div>
            <a href={props.fb}>Facebook</a> <br/>
            <a href={props.yt}>Youtube</a> <br/>
            <a href={props.lk}>Linkedin</a> <br/>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>Conheca a nossa equipe:</h1>
            <Equipe name="Kevin" cargo="Programador" idade="23" facebook="https//google.com" youtube="https//google.com" linkedin="https//google.com" />
            <Equipe name="Karan" cargo="Supervisor" idade="20" facebook="https//google.com" youtube="https//google.com" linkedin="https//google.com" />
            <Equipe name="Diney" cargo="Dev" idade="43" facebook="https//google.com" youtube="https//google.com" linkedin="https//google.com" />
        </div>
    )
}

export default App;