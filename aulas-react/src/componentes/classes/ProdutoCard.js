import React from 'react';
import "../../estilos/div-centralizada.css";

const card ={
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
    backgroundColor: "#ffff",
    padding: "30px"
}

export default class ProdutoCard extends React.Component{ // aula 26
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div style={card}>
                <h2>{this.props.nome}</h2>
                <img src={this.props.imagem} alt="produto" style={{width: "10%"}}/>
                <p>Categoria: {this.props.categoria}</p>
                <p>Preço: {new Intl.NumberFormat("PT-BR", {style: "currency", currency: "BRL"}).format(this.props.preco)}</p>
                <button>Remover</button>
            </div>
        );
    }
}