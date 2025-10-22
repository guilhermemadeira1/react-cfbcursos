import React from "react";

const borda = {
    border: "solid 1px #000",
};

export default function Tabela({titulo= "", dados= []}){ // aulas 30-31
    const colunas = Object.keys(dados[0]);
    const linhas = dados.map((linha, i) =>{
            return (
                <tr key={i}>
                    {colunas.map((coluna, i) => 
                        <td key={i} style={borda}>{linha[coluna]}</td>
                    )}
                </tr>
            )
    });

    return(
       <table style={{borderCollapse: "collapse"}}>
        {titulo ? <caption style={borda}>{titulo}</caption> : ""}   
            <thead>    
                <tr>
                    {colunas.map((c, i) => <th key={i} style={borda}>{c}</th>)}
                </tr>
            </thead>
            <tbody>
                    {linhas}
            </tbody>
       </table>
    );
}