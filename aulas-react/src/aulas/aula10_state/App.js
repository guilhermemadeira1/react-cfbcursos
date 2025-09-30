import React, {useState} from 'react';

const div = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
}
const btn = {
        width: '50%',
        padding: '15px',
        backgroundColor: '#a0f',
        color: '#fff',
        font: 'normal bold 1em Arial',
        borderStyle: 'none',
        borderRadius: '5px',
        margin: '5px'
};

function App(){
    const [num, setNum] = useState(0); //retorna o estado e uma função para atualizar o estado
    return(
        <>
            <div style={div}>
                 <p style={{fontWeight: 'bold', fontSize: '2em'}}>{num}</p>
           
                <button style={btn} onClick={()=> setNum(num+1)}>Incrementar</button>
                <button style={btn} onClick={()=> setNum(num-1)}>Decrementar</button>
                <button style={btn} onClick={()=> setNum(num*2)}>Dobrar</button>
                <button style={btn} onClick={()=> setNum(0)}>Zerar</button>
            </div>
          
        </>
    );
}
export default App; //O useState atualiza o estado num do componente App pela funcao setNum e o renderiza de novo
