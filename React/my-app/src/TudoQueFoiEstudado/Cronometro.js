import React, { Component } from "react";
import "./index.css"

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            botao: "VAI"
        };
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null
            this.setState({ botao: "VOLTAR"});
        }else{
            this.timer = setInterval(()=>{
                let state = this.state;
                state.numero = state.numero + 0.1;
                this.setState(state);
                this.setState({ botao: "PARAR"});
                console.log(state.numero);
            },100);
        }
        
    }

    limpar(){
        clearInterval(this.timer);
        this.timer = null
        let state = this.state;
        state.botao = "VAI";
        state.numero = 0;
        this.setState(state);
    } 

    render(){
        return(
            <div className="container">
                <img src={require("./Assets/cronometro.png")} className="img"/>   
                <a  className="timer">{this.state.numero.toFixed(1)}</a>
                <di className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.botao}</a>
                    <a className="botao" onClick={this.limpar}>limpar</a>
                </di>
            </div>
        );
    }
}

export default App;