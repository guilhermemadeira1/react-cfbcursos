import React from "react";
import PainelProdutos from "../../componentes/classes/PainelProdutos";
import "../../estilos/sistema-produtos.css";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dados: [
                {id: 1, nome: "Fogão", preco: 1498.99, categoria: "Cozinha"},
                {id: 2, nome: "Chuveiro", preco: 485.90, categoria: "Banheiro"},
                {id: 3, nome: "Ferro de passar", preco: 349.90, categoria: "Banheiro"},
                {id: 4, nome: "Jogo de cartas", preco: 48.90, categoria: "Lazer"},
            ]
        }
        this.setDados = this.setDados.bind(this);
    }
    setDados(dados){
        this.setState({dados}); // {dados} === {dados: dados}
    }

    render(){
        return <PainelProdutos dados={this.state.dados} atualizarDados={this.setDados}/>;
    }
    
}