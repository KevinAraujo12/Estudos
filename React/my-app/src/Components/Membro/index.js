import React, { Component } from "react";

class Membro extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.name
        };

        this.Entrar = this.Entrar.bind(this);

    }

    Entrar() {
        this.setState({ name: "Kevin Araujo Nunes" });
    }
    
    render(){
        return(
            <div>
                <h1>Seja Bem vindo!!! {this.state.name}</h1>
                <button onClick={this.Entrar}>Entrar com usuario</button>
                <br/>
                <button onClick={() => this.setState({ name: "" })}>Sair</button>
            </div>
        );
    }
}

export default Membro;