import React, { Component } from "react";
import Feed from "./Components/Feed";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id: 1, name: "Kevin", like: 10, comentarios: 12},
                {id: 2, name: "Lucas", like: 50, comentarios: 70},
                {id: 3, name: "Amanda", like: 20, comentarios: 35},
                {id: 4, name: "Fernando", like: 0, comentarios: 0}
            ]
        };
    }

    render() {
        return(
            <div>
                {this.state.feed.map((item)=> {
                    return(
                        <div>
                            <Feed id={item.id} name={item.name} like={item.like} comentarios={item.comentarios} />
                        </div>
                    );
                })}
            </div>
        );

    }
}


export default App;