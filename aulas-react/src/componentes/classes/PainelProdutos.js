import React from 'react';
import TabelaProdutos from "./TabelaProdutos";
import FormularioProdutos from "./FormularioProdutos";

export default class PainelProdutos extends React.Component{ // aula 26
    constructor(props){
        super(props);
        this.state = {
            tabelaVisivel: true,
            modalVisivel: true
        }
        this.mudarVisibilidadeTabela = this.mudarVisibilidadeTabela.bind(this); // permite passar a função diretamente sem callback
        this.atualizarDados = this.atualizarDados.bind(this);
        this.mudarVisibilidadeModal = this.mudarVisibilidadeModal.bind(this);
    }

    mudarVisibilidadeTabela(){
        this.setState(prevState => {
            return {tabelaVisivel: !prevState.tabelaVisivel};
        });
    }

    mudarVisibilidadeModal(){
        this.setState(prevState => { 
            return {modalVisivel: !prevState.modalVisivel};
        });
    }

    atualizarDados(novosDados){
        this.props.atualizarDados(novosDados);
    }

    render(){
        return (
            <div className="painel">
                <h1>Painel de produtos</h1>
                <FormularioProdutos produtos={this.props.dados} atualizarDados={this.atualizarDados}/>
                <div>
                    <p>Tabela: {this.state.tabelaVisivel? "Visível" : "Oculta"}</p>
                    <button onClick={this.mudarVisibilidadeTabela}>{this.state.tabelaVisivel? "Ocultar tabela" : "Exibir tabela"}</button>
                </div>
                <div className="secao-tabela">
                    {
                        this.state.tabelaVisivel && <TabelaProdutos 
                            produtos={this.props.dados} 
                            atualizarDados={this.atualizarDados} 
                            modalVisivel={this.state.modalVisivel}
                            mudarVisibilidadeModal={this.mudarVisibilidadeModal}
                        />
                    }
                    
                </div>
                
            </div>            
        );
    }
}