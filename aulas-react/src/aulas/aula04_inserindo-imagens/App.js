import React from 'react';
import Logo from '../../logo.svg'; // no mesmo diretório do App.js pode acessar diretamente

export default function App(){
    const titulo = 'Primeiro App react';
    const section = (<section>
                        <p>Parágrafo dentro de uma section</p>
                    </section>); // a variável armazena jsx
    return(
          <>
            <h1>{'Título: ' + titulo}</h1>
            <div>
                {section}
                <img src={Logo}/>
                <img src='/logo192.png'/>
            </div>
      </>
    );
    // arquivos da pasta public são inseridos diretamente pelo caminho absoluto e não podem ser importados.

    // para interpolar dados dinâmicos dentro do jsx basta inserir eles dentro de chaves {}
}