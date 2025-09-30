import React from 'react';
import Lanche from '../../componentes/Lanche';
import "../../estilos/aula13.css"

function App(){
    const formatadorBRL = new Intl.NumberFormat('PT-BR', {style: 'currency', currency: 'BRL'});
    const [lanches, setLanches] = React.useState([
        {nome: 'Hambúrger', preco: 11.90, descricao: 'Hambúrguer com 2 pães, queijo, carne e ovo.'},
        {nome: 'Hotdog', preco: 9.90, descricao: 'Hotdog com salsicha, mortarda, ketchup e batata palha.'},
        {nome: 'Pizza', preco:39.90, descricao: 'Pizza média de calabresa.'},
        {nome: 'Açaí', preco: 7.90, descricao: 'Açaí médio de 500ml.'},
    ]);
    console.log(lanches);

    let inputNomeRef = React.useRef();
    let inputPrecoRef = React.useRef();
    let inputDescricaoRef = React.useRef();

    // Em react, os componentes mapeados devem ter uma propriedade key com valor único para evitar bugs de renderização.
    // O map retorna uma lista de componentes que o react renderiza automaticamente.

    const items = lanches.map((lanche, i) => { 
        return (
            <li key={i + 1}> 
                {lanche.nome + " - " + formatadorBRL.format(lanche.preco)}
            </li>
        );
    });
    const componentesLanche = lanches.map((lanche, i) => {
        return (
            <Lanche key={i} 
                    nome={`#${(i + 1)} ${lanche.nome}`} 
                    preco={lanche.preco} 
                    descricao={lanche.descricao}
                    remover={()=> removerLanche(i)}
            />
        );
    });
    const adicionarLanche = () =>{
        const nome = inputNomeRef.current.value;
        const preco = parseFloat(inputPrecoRef.current.value);
        const descricao = inputDescricaoRef.current.value;
        setLanches(prevState => [...prevState, {nome, preco, descricao}]);
    }
    const removerLanche = (index) =>{
        const novaLista = lanches.filter((lanche, i) =>{
             return i !== index;
        });
        setLanches(novaLista)
    }
    return (
        <>
            <h1>Lanches</h1>
            <main className="main">
                <div className="conteinerFormOpcoes">
                    <div className="formulario">
                        <h2>Adicionar lanche</h2>
                        <div className="campo">
                            <label htmlFor='nome'>Nome: </label>
                            <input ref={inputNomeRef} type='text' id='nome'/>
                        </div>
                        <div className="campo">
                            <label htmlFor='preco'>Preço: </label>
                            <input ref={inputPrecoRef} type='number' id='preco'/>
                        </div>
                        <div className="campo">
                            <label htmlFor='descricao'>Descrição: </label>
                            <input ref={inputDescricaoRef} type='text' id='descricao'/>
                        </div>
                        <button className='btn' onClick={adicionarLanche}>Adicionar</button>
                    </div>
                    <ul className="opcoes">{lanches.length > 0? items : "A lista está vazia."}</ul>
                </div>
                <section className="sectionLanches">
                    {componentesLanche}
                </section>
            </main>
        </>
    ); 
}
export default App;