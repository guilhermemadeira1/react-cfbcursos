/*
    Function.prototype.bind(obj) é um método nativo do javascript que permite
    alterar o escopo do this de uma função.

    const dados = {
        nome: Joao,
        idade: 30,
        peso: 78.9
    }
    function funcaoBase(){
        console.log("Exibindo: ", this); 

        // antes do bind o this aponta pro objeto global (window no navegador ou global no ambiente node.js)
        // o this apontará pro objeto global sempre que a função for declarada no escopo global
    }
    const exibirDados = funcaoBase.bind(dados);
    exibirDados() // Exibindo: {nome: Joao, idade: 30, peso: 78.9}

    Em react, bind pode ser usada para definir o escopo da classe num método
    para que ele possa ser chamado diretamente em eventos.

    Exemplo sem bind:

    export default class Botao extends React.Component{
        constructor(props){
            super(props);
        }
        render(){
            return <button onClick={()=> this.metodo()}>Executar Operacao</button>
        }
        metodo(){
            // ...
        }
    }

    Exemplo com bind:

    export default class Botao extends React.Component{
        constructor(props){
            super(props);
            this.metodoComBind = this.metodo.bind(this);
        }
        render(){
            return <button onClick={this.metodoComBind} >Executar Operacao</button>
        }
        metodo(){
            // ...
        }
    }
    
*/