import React from "react";
import Modal from "./Modal";
import ProdutoCard  from "./ProdutoCard";
import Lampada from "../imagens/lampada-on.png";

export default class TabelaProdutos extends React.Component{ // aula 26
    constructor(props){
        super(props);
        this.state ={
            detalhesProduto: null,
        }
        this.mostrarOcultarModal = this.mostrarOcultarModal.bind(this);
    }

    removerProduto(id){
        const novaListaProdutos = this.props.produtos.filter(p => p.id != id);
        this.props.atualizarDados(novaListaProdutos);
    }

    obterDetalhes(nome, categoria, preco){
        this.setState(
            {detalhesProduto: {nome, categoria, preco}}
        );
    }

    mostrarOcultarModal(){
        this.props.mudarVisibilidadeModal();
        console.log("Modal: "+ this.props.modalVisivel)
    }
    
    render(){
        const {nome, categoria, preco} = this.state.detalhesProduto || {}; // evita desestruturação de null
        const tuplas = this.props.produtos.map(p => {
            return(
                <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.nome}</td>
                    <td>{new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(p.preco)}</td>
                    <td>{p.categoria}</td>
                    <td>
                        <button onClick={()=> {
                            this.obterDetalhes(p.nome, p.categoria, p.preco);
                            this.mostrarOcultarModal()
                        }}>
                            Detalhes
                        </button>
                    </td>
                    <td>
                        <button onClick={()=> this.removerProduto(p.id)}>
                            Excluir
                        </button>
                    </td>
                </tr>
            )
        });
        return (
            <>
            <table className="tabela">
                <caption>Tabela de produtos</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preco</th>
                        <th>categoria</th>
                        <th colSpan="2">Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {tuplas.length > 0? tuplas : <tr><td colSpan="6">A tabela está vazia</td></tr>}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="5">Quantidade</th>
                        <td>{this.props.produtos.length}</td>
                    </tr>
                </tfoot>
            </table>
            {(this.state.detalhesProduto && this.props.modalVisivel) && (
                <Modal fecharModal={this.mostrarOcultarModal}visivel={this.props.modalVisivel}>
                    <ProdutoCard nome={nome} categoria={categoria} preco={preco} imagem={Lampada}/>
                </Modal>
            )
             //retorna o componente se a primeira expressão for true, se nao renderiza nada
            }
            </>
        );
    }
    componentDidUpdate(){
        console.log("Componente tabela atualizado!");
    }
    componentDidMount(){
        console.log("Componente tabela montado!")
    }
    componentWillUnmount(){
        console.log("Componente tabela desmontado!");
    }
}