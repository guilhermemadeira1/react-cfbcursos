import React from "react";

class Contador extends React.Component{ // Aula 21
    constructor(props){
        super(props); // tem que usar super(props) antes de acessar o this.props
        this.state = {contador: 0}; // declara o estado contador e inicializa com valor 0
    }
    render(){
        return (<div>
            <p>Nome do contador: {this.props.nome}</p>
            <p>Contador: {this.state.contador}</p>
            <button onClick={()=>this.setState(prevState =>{contador: prevState.contador + 1})}>Incrementar</button>
        </div>);
    }// atualiza o state (OBS: atualizar apenas com setState)
    
    // implementa o método componentDidMount da classe Component executado quando o componente for renderizado pela primeira vez
    componentDidMount(){
        console.log(`Componente ${this.props.nome} foi montado!`);
    }
    // implementa o método componentDidUpdate da classe Component, executado quando o estado for atualizadoe e o mesmo re-renderizado
    componentDidUpdate(prevProps, prevState){
        console.log(`Componente ${this.props.nome} foi atualizado!`);
        console.log(`Estado anterior: ${prevState.contador}\nEstado atual: ${this.state.contador}\nPropriedade nome anterior: ${prevProps.nome}\nPropriedade nome atual ${this.props.nome}\n`);
    }
}
export default Contador;