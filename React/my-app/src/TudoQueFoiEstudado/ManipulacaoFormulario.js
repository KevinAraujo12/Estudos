import React, { Component } from "react";


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
             name: "",
             email: "",
             senha: "",
             error: true,
        }

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(e) {
        const {name, email, senha} = this.state;

        if (name != "" && email != "" && senha != ""){
            alert(`Nome: ${name} \n Senha:${senha} \n Email: ${email}`);    
            e.preventDefault();
        }else {
            this.setState({ error : false });
            e.preventDefault();
            this.setState({ error: "" });
        }
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.cadastrar} >
                    <h1>Novo Formulario</h1>
                    {this.state.error ? "Preencha todos so campos:" : "Ops parece que tem algo de errado"} <br/>
                        <label>Nome:</label>
                        <input type="text" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} /> <br/>
                        <label>Email:</label>
                    <input name="email" type="email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}} /> <br/>
                        <label>Senha:</label>
                    <input name="password" type="password" value={this.state.senha} onChange={(e) => {this.setState({senha: e.target.value})}} /> <br/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );

    }
}


export default App;