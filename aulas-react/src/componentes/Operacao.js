import React from "react"; // Aula 07

function Operacao(props){
    const n1 = 10;
    const n2 = 5;
    return (
        <>
            <div>
                <p>N1 = {n1}</p>
                <p>N2 = {n2}</p>
                <p>{props.operacao.nome}: {props.operacao.calcular(n1, n2)}</p>
                <br/>
            </div>
        </>
    );
}
export default Operacao; // Operacao recebe um objeto com nome da operação e função de cálculo