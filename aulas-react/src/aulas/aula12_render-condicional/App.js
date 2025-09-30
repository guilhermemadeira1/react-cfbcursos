import React, { useState, useRef } from "react";
import MensagemHora from "../../componentes/MensagemHora";
import "../../estilos/btn.css";
import "../../estilos/div-centralizada.css";

function App(){
    const [stateCor, setCor] = useState(1);
    const [statePiscando, setPiscando] = useState(false);
    const intervaloIDRef = useRef(null);

    const getCor = (c)=>{
        switch(c){
            case 1: 
                return '#f00';
            case 2:
                return '#0f0';
            case 3:
                return '#00f';
        };
    }

    const mudarCor = ()=>{
        setCor(prevState => prevState === 3? 1 : prevState + 1); // ao atualizar o state avalia o valor anterior na chamada do setCor
    }

    const piscarCores = ()=>{
        if(statePiscando && intervaloIDRef.current){
            clearInterval(intervaloIDRef.current); // cancela o intervalo anterior
            intervaloIDRef.current = null; // apaga a referência do intervalo
            setPiscando(false); 
        }
        if(!statePiscando && intervaloIDRef.current === null){
            intervaloIDRef.current =
            setInterval(()=> mudarCor(), 1000); // cria um intervalo que muda de cor a cada segundo e armazena o ID na referência
            setPiscando(true);
        }
    }

    return (
        <>
            <div className="div-centralizada">
                <MensagemHora cor={getCor(stateCor)}/>
                <div>
                    <button className="btn" onClick={mudarCor}>Alterar cor</button>
                    <button className="btn" onClick={piscarCores}>{statePiscando? 'Parar':'Piscar'}</button>
                </div>
                <p style={{fontWeight: 'bold'}}>Cor: {stateCor}</p>
                <p style={{fontWeight: 'bold'}}>Piscando: {statePiscando? 'Sim': 'Não'}</p>
            </div>
        </>
    );
}

export default App;