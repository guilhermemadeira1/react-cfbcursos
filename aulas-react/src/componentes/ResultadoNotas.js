import React from "react";

function ResultadoNotas({notas}){
    let soma = 0;
    notas.forEach(n => soma += n);
    const media = soma/notas.length; 
    return(
        <>
            <div>
                <p><strong>Soma das notas: </strong> {soma}</p>
                <p><strong>Média das notas: </strong>{media}</p>
                <p><strong>Maior nota: </strong>{notas.sort((a, b) => b - a)[0]}</p> 
                 <p><strong>Menor nota: </strong>{notas.sort((a,b) => a - b)[0]}</p>              
                <p><strong>Resultado: </strong> {media >= 7? "Aprovado": "Reprovado"}</p>
                <br/>
                <p><strong>Para aprovação:</strong><br/>Soma das notas >= 28<br/>Média >= 7</p>
            </div>
        </>
    );

}
export default ResultadoNotas;