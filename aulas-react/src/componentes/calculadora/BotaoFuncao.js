import React from "react";

export default function BotaoFuncao({texto, funcao, classe}){
    return <button className={classe} onClick={funcao}>{texto}</button>
}