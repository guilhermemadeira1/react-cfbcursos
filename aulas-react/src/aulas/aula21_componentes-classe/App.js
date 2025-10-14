import React, {Component} from 'react';
import Contador from '../../componentes/classes/Contador';

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
                <h1>App construído por componente de classe</h1>
                <Contador nome="Contador1"/>
                <Contador nome="Contador2"/>
                <Contador nome="Contador3"/>
            </>
        );
    }
}
export default App;

/*
    Componentes de classe extendem a classe Componente para herder os métodos para
    criar componentes e gerenciar estado seu e ciclo de vida. 
    Usam uma sintaxe mais antiga de componentes React e não suportam hooks modernos.

    Os states e props são inicializados no construtor do componente.

    super(props) -> chama o método construtor da classe Component para incializar as props.

    Props, estadoos e métodos do componente são acessados usando this. Ex: this.metodo(), this.state.estado e this.props.prop

    O state é pasado como um objeto {key: value, ...} em this.state e atualizado pela função setState({key: value, ...});

    OBS: Tecnicamente é possível atualizar o valor do state diretamente pela propriedade state.propriedade, mas isso gerará comportamentos inesperados no componente e não será renderizado ao mudar o valor.

    O ciclo de vida não é gerenciado por hooks, e sim sobrescrevendo os métodos de Component que executam uma
    operação em determinadas situações:

    render() -> retorna o jsx do componente.
    componentDidMount() -> executado quando o componente é inserido no virtual DOM. Equivalente ao useEffect(()=> ..., []) em componenyes funcionais.
    componentDidUpdate(prevProps, prevState) -> executado quando o estado é atualizado. Equivalente ao useEffect(()=> ...) em componentes funcionais.
    componentWillUnmount() -> executado quando o componente estiver prestes a ser removido do virtual DOM. Equivalente ao useEffect(()=> return ()=>{//desmontagem}, []) em componentes funcionais.

*/   