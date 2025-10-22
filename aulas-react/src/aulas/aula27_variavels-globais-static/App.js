import React from 'react';
import Globais from '../../componentes/classes/Globais';
import Info from '../../componentes/Info';

export default function App(){
    const [curso, setCurso] = React.useState(Globais.curso);
    const [ano, setAno] = React.useState(Globais.ano);
    const [canal, setCanal] = React.useState(Globais.canal);

    const gravarCursoGlobal = ()=>{
        Globais.curso = curso;
        console.log("Curso: " + Globais.curso);
        setCurso(""); // faz o app re-renderizar para passar os valores globais atualizadoos para o info
    }

    const gravarAnoGlobal = ()=>{
        Globais.ano = ano;
        console.log("Ano: " + Globais.ano);
        setAno("");
    }

    const gravarCanalGlobal = ()=>{
        Globais.canal = canal;
        console.log("Canal" + Globais.canal);
        setCanal("");
    }

    return (
        <>
            <Info curso={Globais.curso} ano={Globais.ano} canal={Globais.canal}/>
            <div>
                <label htmlFor="i-curso">Curso: </label>
                <input id="i-curso" type="text" onChange={(e)=> setCurso(e.target.value)}/>
                <button onClick={()=> gravarCursoGlobal()}>Gravar curso</button>
            </div>
            <div>
                <label htmlFor="i-ano">Ano: </label>
                <input id="i-ano" type="text" onChange={(e)=> setAno(e.target.value)}/>
                  <button onClick={()=> gravarAnoGlobal()}>Gravar ano</button>
            </div>
            <div>
                <label htmlFor="i-canal">Canal: </label>
                <input id="i-canal" type="text" onChange={(e)=> setCanal(e.target.value)}/>
                <button onClick={()=> gravarCanalGlobal()}>Gravar canal</button>
            </div>

        </>        
    );
}