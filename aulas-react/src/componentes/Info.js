import React from "react";
import Globais from "./classes/Globais";

export default function info({curso, ano, canal}){ // aula 27
    return(
        <div>
            <h1>Dados globais</h1>
            <p>Curso: {curso}</p>
            <p>Ano: {ano}</p>
            <p>Canal: {canal}</p>
        </div>
    );

}