import React from 'react';

function Pessoa(props){
    return (
        <article>
            <p>Nome: <strong>{props.nome}</strong></p>
            <p>Idade: <strong>{props.idade}</strong></p>
            <p>Condição: <strong>{props.idade >= 18? 'Maior de idade': 'Menor de idade'}</strong></p>
            <br/>
        </article>
    );
}
export default Pessoa;