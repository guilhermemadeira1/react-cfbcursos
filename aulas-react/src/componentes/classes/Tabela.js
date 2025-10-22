import React from 'react';

const borda = {
    border: "solid 1px black"
}

export default class Tabela extends React.Component{ // aula 32
    constructor(props){
        super(props);
    }
    render(){
        const colunas = Object.keys(this.props.dados[0]);
        const linhas = this.props.dados.map((linha, i) => {
            return (
                <tr key={i}>
                    {colunas.map((coluna,i) => <td key={i} style={borda}>{linha[coluna]}</td>)}
                </tr>
            );
        })

        return(
            <table style={{borderCollapse: "collapse"}}>
                {this.props.titulo && <caption style={borda}>{this.props.titulo}</caption>}
                <thead style={borda}>
                    <tr>
                        {colunas.map((c,i) => <th key={i} style={borda}>{c}</th>)}
                    </tr>
                </thead>
                <tbody style={borda}>
                    {linhas}
                </tbody>
            </table>
        );
    }
}

Tabela.defaultProps = {
    dados: []
}