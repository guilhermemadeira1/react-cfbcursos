import React from "react";
import estiloExterno from './estilo-externo.css';

function App(){
    const titulo2 = {
        color: '#00f',
        fontSize: '2em'
    };
    return (
        <>
            <section className="secao">
                <h1 style={{color:'#f00', fontSize: '3em'}}>Titulo1</h1>
                <h2 style={titulo2}>Titulo2</h2>
                <p>Texto de exemplo</p>
            </section>
        </>
    );
}
export default App;