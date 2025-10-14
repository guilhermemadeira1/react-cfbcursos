import React from 'react';
import Carro from '../../componentes/classes/Carro';
import Imagem from "../../componentes/imagens/gol.png"

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Carro marca="Gol" velocidadeMaxima={160} imagem={Imagem} />;
    }
}
