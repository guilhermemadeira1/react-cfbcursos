import React from "react";

export default class FormularioProdutos extends React.Component{ // aula 26
    constructor(props){
        super(props);
        this.state ={
            id: this.props.produtos.length + 1,
            nome: "",
            preco: 0,
            categoria: ""
        }
    }

    adicionarProduto(produto){
        const produtos = this.props.produtos;
        console.log(produto);
        for(let key of Object.keys(produto)){
            if(!produto[key]){
                alert(`O campo ${key} está vazio.`);
                return;
            }
        }
        produtos.push(produto);

        this.props.atualizarDados(produtos);
        const ultimoId = this.props.produtos[this.props.produtos.length-1].id;

        console.log("Id atual: " + ultimoId);
        console.log("Proximo id: " + (ultimoId + 1));

        this.setState({id: ultimoId + 1}); // atualiza o id atual ao adicionar produto
    }

    render(){
        const categorias = ["Eletrodoméstico", "Cozinha", "Banheiro", "Quarto", "Lazer"];
        const produto = {
            id: this.state.id,
            nome: this.state.nome,
            preco: this.state.preco,
            categoria: this.state.categoria
        }
        
        return(
            <div className="formulario">
                <div className="campo">
                    <label htmlFor="i-nome">Nome:</label>
                    <input type="text" id="i-nome" className="entrada" value={this.state.nome}onChange={(e)=> this.setState({nome: e.target.value})}/>
                </div>
                <div className="campo">
                    <label htmlFor="i-categoria">Categoria:</label>
                    <select className="entrada" value={this.state.categoria} onChange={(e)=> this.setState({categoria: e.target.value})}>
                        <option value="">---</option>
                       {categorias.map((c,i) => <option key={i} value={c}>{c}</option>)}
                    </select>
                </div>
                <div className="campo">
                    <label htmlFor="i-preco">Preço:</label>
                    <input type="number" id="i-preco" step="0.20" className="entrada"  onChange={(e)=> this.setState({preco: parseFloat(e.target.value)})} value={this.state.preco}/>
                </div>
                <button onClick={()=> this.adicionarProduto({...produto})}>Adicionar produto</button>
            </div>
        );
    }
}