import React from 'react';

export default function BtnCalcularIMC({peso, altura, setIMC}){ // aulas 30-31
    const calcularIMC = (p, a) =>{
        if(p === 0 || a === 0 ) return 0;
        return (p/(a**2)).toFixed(1);
    }
    return (
        <div>
            <button onClick={()=> setIMC(calcularIMC(peso, altura))}>Calcular IMC</button>
        </div>
         
    );
}