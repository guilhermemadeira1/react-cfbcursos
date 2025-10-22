import React from 'react';
import Entrada from "../../componentes/classes/Entrada";
import Tabela from "../../componentes/classes/Tabela";
import ResultadoIMC from "../../componentes/classes/ResultadoIMC";
import BtnCalcularIMC from "../../componentes/classes/BtnCalcularIMC";

const tabelaIMC = [
    {classificação: "Abaixo do Peso", imc: "Abaixo de 18,5"},
    {classificação: "Peso Saudável", imc: "Entre 18,5 e 24,9"},
    {classificação: "Sobrepeso", imc: "Entre 25 e 29,9"},
    {classificação: "Obesidade Grau I", imc: "Entre 30 e 34,9"},
    {classificação: "Obesidade Grau II", imc: "Entre 35 e 39,9"},
    {classificação: "Obesidade Grau III", imc: "Maior que 40"},
];

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            peso: "",
            altura: "",
            resultadoIMC: 0
        }
        this.setResultadoIMC = this.setResultadoIMC.bind(this);
        this.setPeso = this.setPeso.bind(this);
        this.setAltura = this.setAltura.bind(this);
    }
    setPeso(peso){
        this.setState({peso: peso});
    }
    setAltura(altura){
        this.setState({altura: altura});
    }
    setResultadoIMC(imc){
        this.setState({resultadoIMC: imc});
    }
    render(){
        return(
            <>
                <h1>Calculadora IMC com componentes de classe</h1>
                <Entrada label="Peso" valor={this.state.peso} setValor={this.setPeso}/>
                <Entrada label="Altura" valor={this.state.altura} setValor={this.setAltura}/>
                <br/>
                <BtnCalcularIMC peso={this.state.peso} altura={this.state.altura} setIMC={this.setResultadoIMC}/>
                <ResultadoIMC res={this.state.resultadoIMC}/>
                <Tabela titulo="Tabela IMC" dados={tabelaIMC}/>
            </>
        );
    }
}