import React, { Component } from "react";
import "./style.css";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            texto: ""
        }
        this.frases = ["Parabens","Voce e brilhante","Deus te ama","Galao da massa","Jesus esta voltando" ];
        this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    }

    quebrarBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length); // Estamos pegando o array de frases e gerando um numero aleatoria para exibir uma frase aleatoria
        this.state.texto = this.frases[numeroAleatorio];
        this.setState(state);
    }

    render(){
        
        return(
            <div className="container">
                <img src={require("./Assets/biscoito.png")} className="img" />
                <h3 className="textoFrase">{this.state.texto}</h3>
                <Butao name="Abrir Biscoito" quebrar={this.quebrarBiscoito}  />
            </div>
        );
    }
}

class Butao extends Component {
    render(){
        return(
            <div>
                <button onClick={this.props.quebrar}>{this.props.name}</button>
            </div>
        );
    }
}


export default App;