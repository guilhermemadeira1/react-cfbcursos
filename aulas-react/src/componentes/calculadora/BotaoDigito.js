import React from "react";

export default function BotaoDigito({digito, addDigito, classe}){
    return <button className={classe} onClick={()=> addDigito(digito)}>{digito}</button>;
}