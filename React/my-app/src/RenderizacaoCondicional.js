import React, { Component } from "react";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            status: false
        };
        this.Logar = this.Logar.bind(this);
        this.Sair = this.Sair.bind(this);
    }

    Logar(){
        this.setState({ status: false });
    }

    Sair() {
        this.setState({ status: true });
    }

    render() {
        return(
            <div>
                {this.state.status ? 
                    <div><h1>Faca o seu login</h1> <button onClick={this.Logar}>Logar</button></div>
                   : 
                 <div><h1>Parabens voce esta logado!!</h1> <button onClick={this.Sair}>Sair</button></div>
                }

            </div>
        );

    }
}


export default App;