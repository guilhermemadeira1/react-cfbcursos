import React from "react";

export default class BtnCalcularIMC extends React.Component{
    constructor(props){ // aula 32
        super(props);
        this.calcularIMC = this.calcularIMC.bind(this);
    }
    IMC(p, a){
        return p/(a**2);
    }
    calcularIMC(){
        const p = this.props.peso;
        const a = this.props.altura;
        this.props.setIMC(this.IMC(p,a))
    }
    render(){
        return(
            <div>
                <button onClick={this.calcularIMC}>Calcular IMC</button>
            </div>
        );
    }

}