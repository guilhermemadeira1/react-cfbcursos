import React from 'react';
import Operacao  from '../../componentes/Operacao';

function App(){
    const operacoes =[
        {nome: 'soma', calcular: (n1, n2) => n1 + n2},
        {nome: 'subtração', calcular: (n1, n2) => n1 - n2},
        {nome: 'multiplicação', calcular: (n1, n2) => n1 * n2},
        {nome: 'divisão', calcular: (n1, n2) => n1 / n2}
    ] ;

    return (
        <>{operacoes.map(op => <Operacao operacao ={op}/>)}</>
    );
}
export default App;