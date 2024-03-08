import React, { Component } from "react";

// Aplicando class component

class Equipe extends Component {
    render() {
        return (
            <div>
                <Sobre nm={this.props.name} cg={this.props.cargo} idade={this.props.idade} />    
                <Social fb={this.props.facebook} yt={this.props.youtube} lk={this.props.youtube} />
                <hr/>
            </div>
        );
    }
}

class Sobre extends Component {
    render() {
        return (
            <div>
                <h2> Nome: {this.props.nm}</h2>
                <h3> Cargo: {this.props.cg}</h3>
                <h3> Idade: {this.props.idade}</h3>
            </div>
        );
    }
}

const Social = (props) => {
    return (
        <div>
            <a href={props.fb}>Facebook</a> <br/>
            <a href={props.yt}>Youtube</a> <br/>
            <a href={props.lk}>Linkedin</a> <br/>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Conheca a nossa equipe:</h1>             
            <Equipe name="Kevin" cargo="Gerente" idade="23" facebook="https//google.com" youtube="https//google.com" linkedin="https//google.com" />
            <Equipe name="Igor" cargo="Dev" idade="25" facebook="https//google.com" youtube="https//google.com" linkedin="https//google.com"/>
            <Equipe name="Breno" cargo="Programador" idade="50" facebook="https//google.com" youtube="https//google.com" linkedin="https//google.com"/>
        </div>
    );
}

export default App;