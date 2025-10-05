import React from 'react';
import Conteiner from "../../componentes/Conteiner"

function App(){
    return(
    <>
        <Conteiner>
            <h1>Titulo</h1>
            <p>Paragrafo</p>
            <button>Botão</button>
        </Conteiner>
    </>);
}
export default App;


/* Contenção de componentes permite inserir componentes ou html dentro de outro
   componente envolvendo-os entre sua abertura e fechamento. 
   Os filhos evolvidos são inseridos e organizados no pai por meio da propriedade 
   props.children, que é a lista de componentes filhos. 

   Ex:

   <ComponentePai>
        <Filho1/>
        <Filho2/>
        <Filho3/>
   </ComponentePai>
   

   export default function ComponentePai(props){
        return(
            <div>
                {props.children} {// insere todos os filhos na ordem do jsx}
            </div>
        );
   }

   props.children[0] -> insere o primeiro filho da ordem do jsx
   props.children[props.children.length-1] -> insere o último filho da ordem do jsx
*/