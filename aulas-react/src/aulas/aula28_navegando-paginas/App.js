import React from "react";
import Pagina1 from "../../componentes/paginas/Pagina1";
import Pagina2 from "../../componentes/paginas/Pagina2";
import Pagina3 from "../../componentes/paginas/Pagina3";
import Padrao from "../../componentes/paginas/Padrao";

export default function App(){
    const paginas = [<Padrao/>, <Pagina1/>, <Pagina2/>, <Pagina3/>];
    const [pagina, setPagina] = React.useState(0);

    React.useEffect(()=>{
        const paginaParam = parseInt(window.location.href.split("?")[1]); //divide a url pelo ? onde fica os parametros e pega o segundo valor do vetor que é o numero da pagina
        if(isNaN(paginaParam)){ // se nao tiver parametro na url o vetor não tem segundo valor (retorna undefined) e o parseInt retorna NaN
            setPagina(0);
        }
        else{
            setPagina(paginaParam);
        }   
        
    });

    const mudarUrl = (numPag)=>{
        if(numPag === 0){ 
            window.open("http://localhost:3000", "_self");
        }
        else{
            window.open(`http://localhost:3000?${numPag}`, "_self");
        }
    }

    const retornaPagina = () =>{
        return paginas[pagina];
    }

    const proximaPagina = ()=>{
        if(pagina === paginas.length-1){
            mudarUrl(0);
        }
        else{
            mudarUrl(pagina + 1);
        }
   }

    return (
        <>
            <button onClick={()=> proximaPagina()}>Proxima pagina</button>
            <hr/>
            {retornaPagina()}
        </>
    );
}