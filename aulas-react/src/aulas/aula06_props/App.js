import React from "react";

import Pessoa from '../../componentes/Pessoa';

function App(){
    const pessoas = [
        {nome: 'João', idade: 30},
        {nome: 'Maria', idade: 50},
        {nome: 'José', idade: 10},
        {nome: 'Marta', idade: 16}
    ];
    return (
        <>
            {   // o código js é inserido dentro de jsx dentro das chaves {}
                pessoas.map(p => <Pessoa nome= {p.nome} idade= {p.idade}/>)
                // gera um componente pessoa para cada objeto
            }
        </>
    );
}
export default App;