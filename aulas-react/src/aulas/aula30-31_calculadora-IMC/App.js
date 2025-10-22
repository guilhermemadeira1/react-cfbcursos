import React, {useState, useEffect} from "react";
import Entrada from "../../componentes/Entrada";
import Tabela from "../../componentes/Tabela";
import ResultadoIMC from "../../componentes/ResultadoIMC";
import BtnCalcularIMC from "../../componentes/BtnCalcularIMC";

const tabelaIMC = [
    {classificação: "Abaixo do Peso", imc: "Abaixo de 18,5"},
    {classificação: "Peso Saudável", imc: "Entre 18,5 e 24,9"},
    {classificação: "Sobrepeso", imc: "Entre 25 e 29,9"},
    {classificação: "Obesidade Grau I", imc: "Entre 30 e 34,9"},
    {classificação: "Obesidade Grau II", imc: "Entre 35 e 39,9"},
    {classificação: "Obesidade Grau III", imc: "Maior que 40"},
];


export default function App(){
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultadoIMC, setResultadoIMC] = useState(0);

    return(
        <>
            <h1>Calculadora de IMC</h1>
            <Entrada label="Peso" valor={peso} setValor={setPeso}/>
            <Entrada label="Altura" valor={altura} setValor={setAltura}/>
            <br/>
            <BtnCalcularIMC peso={peso} altura={altura} setIMC={setResultadoIMC}/>
            <ResultadoIMC res={resultadoIMC}/>
            <Tabela titulo="Tabela IMC" dados={tabelaIMC}/>
        </>
    );
}