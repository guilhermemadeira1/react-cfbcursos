import React, {useState, useEffect} from "react";
import Tabela from "../../componentes/Tabela";

export default function App(){
    const anoAtual = new Date().getFullYear();
    const [marca, setMarca] = useState("");
    const [nome, setNome] = useState("");
    const [ano, setAno] = useState(anoAtual);
    const [preco, setPreco] = useState(100000);
    const [carros, setCarros] = useState([]);

    const fetchCarros = async () =>{
        try{
            const dadosJson = await fetch("/carros.json"); // o / acessa o conteudo da pasta public
            const carros = await dadosJson.json();
            setCarros(carros);
            console.log(carros);
        }
        catch(erro){
            alert(erro);
        }
    }

    useEffect(()=>{ // react não aceita funções assincronas no parametro callback do useEffect
        fetchCarros();
    },[]); // executa o efeito ao montar o App
    
    const cabecalhos = carros.length > 0? Object.keys(carros[0]) : [];

    let carrosFiltrados = carros;
    if(marca){
        carrosFiltrados = carrosFiltrados.filter(c => c.marca.toLowerCase().includes(marca.toLowerCase()));
    }
    if(nome){
        carrosFiltrados = carrosFiltrados.filter(c => c.nome.toLowerCase().includes(nome.toLowerCase()));
    }
    if(ano){
        carrosFiltrados = carrosFiltrados.filter(c => parseInt(c.ano) <= parseInt(ano));
    }
    if(preco){
        carrosFiltrados = carrosFiltrados.filter(c => parseFloat(c.preco) <= parseFloat(preco));
    }

    return(
        <>
            <h1>Busca por filtragem</h1>
            <div>
                <label htmlFor="i-nome">Nome: </label>
                <input id="i-nome" value={nome} type="text" onChange={(e)=> setNome(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="i-marca">Marca: </label>
                <input id="i-marca" value={marca} type="text" onChange={(e)=> setMarca(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="i-ano">Ano até: </label>
                <input id="i-ano" value={ano} type="number" min="1920" max={anoAtual} onChange={(e)=> setAno(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="i-preco">Preço até: </label>
                <input id="i-preco" value={preco} type="number" min="0" step="1000" onChange={(e)=> setPreco(e.target.value)}/>
            </div>
            <br/>
            <Tabela titulo={"Tabela de carros"} cabecalhos={cabecalhos} dados={carrosFiltrados}/>
        </>
    );
}