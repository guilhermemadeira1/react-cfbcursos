import React from 'react';
import "../estilos/Lanche.css";

function Lanche({nome, preco, descricao, remover}){
    const formatadorBRL = new Intl.NumberFormat('PT-BR', {style: 'currency', currency: 'BRL'});
    return (
        <>
            <div className="conteiner">
                <h2 className="titulo">{nome}</h2>
                <p>Preço: {formatadorBRL.format(preco)}</p>
                <p className="desc-p">Descrição: <span className="descricao">{descricao}</span>
                </p>
                <button onClick={remover}>Remover</button>
            </div>
        </>
    );
}
export default Lanche;