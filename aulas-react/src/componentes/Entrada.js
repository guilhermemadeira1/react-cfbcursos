import React from 'react';

export default function Entrada({label = "Entrada", tipo = "text", valor = "", setValor}){ // aulas 30-31
    return (
        <div>
            <label>{label}: </label>
            <input type={tipo} value={valor} onChange={(e) => setValor(e.target.value)} />
        </div>
    );
}