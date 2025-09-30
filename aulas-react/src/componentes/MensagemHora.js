import React from "react";

function MensagemHora(props){
    const msg = {
        fontSize: '1.5em',
        fontWeight: 'bold',
        color: props.cor
    } 

    let hora, mensagem = "";

    props.hora? hora = props.hora : hora = new Date().getHours(); //se não for passado a hora, ela pega a hora do dispositivo

    if(hora > 0 && hora <= 4){
        mensagem = "Boa madrugada!"
    }   
    else if(hora > 4 && hora < 13){
        mensagem = "Bom dia!";
    }
    else if(hora >= 13 && hora < 18){
        mensagem= "Boa tarde!"        
    }
    else{
        mensagem = "Boa noite!";
    }

    return <p style={msg}>{mensagem} Agora são {hora} horas.</p>;
}

export default MensagemHora;