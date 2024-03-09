import React, { Component } from "react";
import Membro from "./Components/Membro";
// Eventos

class App extends Component {
    render(){
        return(
            <div>
                <Membro name="Visitante"/>                
            </div>
        );
    }
}

export default App;