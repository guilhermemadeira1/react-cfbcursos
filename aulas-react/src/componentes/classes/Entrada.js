import React from 'react';

export default class Entrada extends React.Component{
    constructor(props){ // aula 32
        super(props);
    }
    render(){
        return (
            <div>
                <label>{this.props.label}: </label>
                <input type={this.props.tipo} value={this.props.valor} onChange={(e)=> this.props.setValor(e.target.value)}/>
            </div>
        );
    }
}

Entrada.defaultProps = {
    label: "Entrada",
    tipo: "text"
}