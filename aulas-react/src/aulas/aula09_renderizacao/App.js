import React from "react";

// criando um relogio que atualiza a cada segundo

function App(){
    const pData = () => {
        const data = new Date().toLocaleTimeString();
        return <p>{data}</p>;
    };
    return (
        <>{pData()}</>
    );
}
export default App; // o React atualiza apena o componente em vez de atualizar toda a página

/*
 no index.js:

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    const relogio = () =>{
        setInterval(()=>{
            root.render(
                <React.StrictMode>
                    <App/>
                <React.StrictMode/>
            );
        }, 1000)
    }

    relogio();

*/