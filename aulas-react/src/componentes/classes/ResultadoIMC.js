import React from 'react';

export default class ResultadoIMC extends React.Component{ // aula 32
    constructor(props){
        super(props);
    }

    obterFormatacao(){
        const res = Number(this.props.res);
        let resFormatado = res.toLocaleString("PT-BR", {minimumFractionDigits: 1, maximumFractionDigits: 1});
        let cor = {}

        if(res > 40){
            resFormatado += " (obesidade grau III)";
            cor = {color: "#f00"}
        }
        else if(res >= 35){
            resFormatado += " (obesidade grau II)";
            cor = {color: "#f40"}
        }
        else if(res >= 30){
            resFormatado += " (obesidade grau I)";
            cor = {color: "#f90"};
        }
        else if(res >= 25){
            resFormatado += " (sobrepeso)";
            cor = {color: "#ff0"};
        }
        else if(res >= 18.5){
            resFormatado += " (peso saudável)";
            cor = {color: "#080"};
        }
        else{
            resFormatado += " (abaixo do peso)";
            cor = {color: "#03f"};
        }
        return {resultado: resFormatado, cor: cor};
    }

    render(){
        return(
            <div>
                {
                    this.props.res > 0? 
                    <p style={this.obterFormatacao().cor}>
                        Resultado: {this.obterFormatacao().resultado}
                    </p> : ""
                }
            </div>
        );
    }
}