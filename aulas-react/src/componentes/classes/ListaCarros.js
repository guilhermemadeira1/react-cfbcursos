import React from 'react';
import axios from 'axios';

export default class ListaCarros extends React.Component{
    constructor(props){
        super(props);
        this.state = {carros: []};
    }

    componentDidMount(){ // consome a API quando o componene for montado e salva os dados no state
        axios.get("http://localhost:3000") // OBS: precisar rodar a api antes
            .then(response => {
                const carros = response.data;
                if(Array.isArray(carros)){
                    console.log("Dados consumidos:",  carros);
                    this.setState({carros: carros});
                }
            }) // axios retorna os dados convertidos em objeto response
            .catch(error => console.log(error));       
    }

    render(){
        return (
            <>
                <h1>Consumindo API com axios e componente de classe</h1>
                <ul>
                    {this.state.carros.map(c => <li key={c.id}>{`${c.marca} - ${c.modelo}`}</li>)}
                </ul>
            </>
        );
    }
}