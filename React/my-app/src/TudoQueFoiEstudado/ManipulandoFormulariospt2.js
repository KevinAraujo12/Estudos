import React, { Component } from "react";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            form: {
                nome: "",
                email: "",
                senha: "",
                sexo: ""
            }
        }

        this.dadosform = this.dadosform.bind(this);
    }

    dadosform(e) {
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({ form: form });
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
                Nome:
                <input name="nome" type="text" value={this.state.form.nome} onChange={this.dadosform} ></input><br/><br/>
                Email:
                <input name="email" type="email" value={this.state.form.email} onChange={this.dadosform} ></input><br/><br/>
                Senha:
                <input name="senha" type="password" value={this.state.form.senha} onChange={this.dadosform}></input><br/><br/>
                Sexo:
                <select name="sexo" value={this.state.form.sexo} onChange={this.dadosform}>
                    <option value="Masculino" >Masculino</option>
                    <option value="Feminino" >Feminino</option>
                </select> <br/><br/><br/><br/><br/><br/><br/><br/>
                <div>
                    <h2>        
                        {this.state.form.nome}<br/>
                        {this.state.form.email}<br/>
                        {this.state.form.senha}<br/>
                        {this.state.form.sexo}<br/>
                    </h2>
                </div>
            </div>
        );

    }
}


export default App;