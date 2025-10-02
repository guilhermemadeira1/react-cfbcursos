import React, {useState} from 'react';
import EntradaNota from '../../componentes/EntradaNota';
import ResultadoNotas from '../../componentes/ResultadoNotas';
import "../../estilos/div-centralizada.css"

function App(){
    const [notas, setNotas] = useState({nota1: 0.0, nota2: 0.0, nota3: 0.0, nota4: 0.0});

    const handleChange = (evt, num) => {
        const value = parseFloat(evt.target.value);
        switch(num){
            case 1:
                setNotas({...notas, nota1: value}); break;
            case 2: 
                setNotas({...notas, nota2: value}); break;
            case 3:
                setNotas({...notas, nota3: value}); break;
            case 4:
                setNotas({...notas, nota4: value}); break;
        }
    }
    return(
        <>
        <main className="div-centralizada" style={{fontSize: "1.3em"}}>
                <EntradaNota num={1} nota={notas.nota1} setNota={handleChange}/>
                <EntradaNota num={2} nota={notas.nota2} setNota={handleChange}/>
                <EntradaNota num={3} nota={notas.nota3} setNota={handleChange}/>
                <EntradaNota num={4} nota={notas.nota4} setNota={handleChange}/>
                <ResultadoNotas notas={Object.values(notas)}/>
                
        </main>
        </>
    );
    /*
        Elevação de state (state lifting) no React é um forma de compartilhar estados entre componentes para aumentar a reatividade da aplicação sem precisar declarar estados individuais para cada componente.

        Um componente pai declara o state e o setState que são passados para os filhos através de suas props. 
        
        Quando um filho preicisar atualizar o state, ele chama a função setState que recebeu do pai
        e todos os outros componentes que dependem do state serão atualizados imediatamente. 
    */
}
export default App;
