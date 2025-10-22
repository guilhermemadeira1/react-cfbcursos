import React from "react";

export default function ResultadoIMC({res}){ // aulas 30-31
    let resFormatado = Number(res).toLocaleString("PT-BR", {minimumFractionDigits: 1, maximumFractionDigits: 1});
    let cor = {};

    if(res > 40){
        resFormatado += " (obesidade grau III)";
        cor = {color: "#f00"};
    }
    else if(res >= 35){
        resFormatado += " (obesidade grau II)";
        cor = {color: "#f40"}
    }
    else if(res >= 30){
        resFormatado += " (obesidade grau I)";
        cor = {color: "#f90"}
    }
    else if(res >= 25){
        resFormatado += " (Sobrepeso)";
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
    return (
        <div>
            {res > 0? <p style={cor}>Resultado: {resFormatado}</p>: ""}
        </div>
    );
}