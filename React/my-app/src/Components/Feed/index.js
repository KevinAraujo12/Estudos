import React, { Component } from "react";

class Feed extends Component {

    render() {
        return(
            <div key={this.props.id}>
                <h2>{this.props.name}</h2>
                <a>{this.props.like > 1 ? this.props.like + " Curtidas" : this.props.like + " Curtida" }</a> <br/>
                <a>{this.props.comentarios > 1 ? this.props.comentarios + " Comentarios" : this.props.comentarios + " Comentario"} </a>
                <hr/>
            </div>
        );

    }
}


export default Feed;