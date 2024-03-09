import React, { Component } from "react";


    // Formas de panipular o formulario 


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            sexo: "Masculino"
        }
        this.trocarEmail = this.trocarEmail.bind(this);
    }

    trocarEmail(e) {
        console.log("e", e);
        let mudarEmail = e.target.value;
        console.log(mudarEmail);
        this.setState({ email: mudarEmail });
    }


    render() {
        return(
            <div>
                <h1>Login</h1>
                Email:
                <input name="email" type="email" value={this.state.email} onChange={this.trocarEmail} ></input><br/><br/>
                Senha:
                <input name="password" type="password" value={this.state.senha} onChange={(e) => {this.setState({ senha: e.target.value })}}></input><br/><br/>
                Sexo:
                <select name="sexo" value={this.state.Sexo} onChange={(e) => {this.setState({ sexo: e.target.value })}}>
                    <option value="Masculino" >Masculino</option>
                    <option value="Feminino" >Feminino</option>
                </select> <br/><br/><br/><br/><br/><br/><br/><br/>
                <div>
                    <h2>
                        {this.state.email}<br/>
                        {this.state.senha}<br/>
                        {this.state.sexo}<br/>
                    </h2>
                </div>
            </div>
        );

    }
}


export default App;