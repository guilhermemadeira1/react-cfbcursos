import React, {useState, useEffect} from "react";

function App(){
    const [contador, setContador] = useState(0);

    useEffect(()=> console.log("App montado"), []);
    useEffect(()=> console.log("App renderizado"));
    useEffect(()=>{
        console.log(`Contador atualizado para ${contador}`);
        document.title = `Contador: ${contador}`
    }, [contador]);
    useEffect(()=> {
        return ()=> console.log("O app será desmontado")}, 
    []);

    return (
        <>
            <p>Contador: {contador}</p>
            <button onClick={()=> setContador(contador + 1)}>Incrementar</button>
        </>
    );
}
export default App;

/*
  useEffect(()=> ...) -> executa o efeito toda vez que o componente é renderizado.

  useEffect(()=> ..., []) -> executa o efeito quando o componente for montado (renderizado pela primeira vez).

  useEffect(()=> ..., [dep1, dep2, ...]) -> executa o efeito quando uma dependência da lista for atualizado.
  A dependência pode ser um estado ou uma variável.

  useEffect(()=>{return ()=> ...}, [])  -> executa o efeito antes do componente ser desmontado.
*/