import React, {useState} from 'react';
import "../../estilos/div-centralizada.css";

function App(){
    const [nome, setNome] = useState("");
    const [fruta, setFruta] = useState("maçã");
    const [preco, setPreco] = useState(0.0);
    const [cor, setCor] = useState("#ffffff");

    const frutas = ["maçã", "banana", "uva", "pera", "abacate"];
    const formatadorBRL = new Intl.NumberFormat("PT-BR", {style: "currency", currency: "BRL"});

    const capitalize = (str) =>{
        return str.length !== 0? str[0].toUpperCase() + str.slice(1) : "";
    }

    const handleChange = (evt, setState)=>{
        const value = evt.target.value || "";
        setState(value);
    }
    
    return(
        <>
            <main className="div-centralizada" style={{backgroundColor: cor}}>
                <h1>Formulario</h1>
                <form>
                    <div>
                        <label htmlFor="i-nome">Nome: </label>
                        <input type="text" id="i-nome" value={nome} onChange={(e)=> handleChange(e, setNome)}/>
                        <p>Nome digitado: {capitalize(nome)}</p>
                    </div>
                    <div>
                         <label htmlFor="i-fruta">Nome: </label>
                         <select value={fruta} id="i-fruta" onChange={(e)=>handleChange(e, setFruta)}>
                            {frutas.map((f, i) => <option key={i} value={f}>{f}</option>)}
                         </select>
                         <p>Opção selecionada: {capitalize(fruta)}</p>
                    </div>
                    <div>
                        <label htmlFor="i-preco">Preço: </label>
                        <input type="range" step="0.01" max="10" value={preco} id="i-preco" onChange={(e)=> handleChange(e, setPreco)}/>
                        <span> {formatadorBRL.format(preco)} </span>
                    </div>
                    <div>
                        <label htmlFor="i-cor">Cor: </label>
                        <input type="color" value={cor} id="i-cor" onChange={(e) => handleChange(e, setCor)}/>
                        <span> {cor}</span>
                    </div>
                </form>
            </main>
        </>
    );
}
export default App;