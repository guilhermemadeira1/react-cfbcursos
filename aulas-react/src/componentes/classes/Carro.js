import React from 'react';
import "../../estilos/div-centralizada.css";
import "../../estilos/btn.css";
import Buzina from "./sons/buzina.mp3";
import Acelerando from "./sons/carro-acelerando.mp3";
import Freando from "./sons/carro-freando.mp3";
import Ligando from "./sons/carro-ligando.mp3";

export default class Carro extends React.Component{ // Aulas 22-23
    constructor(props){
        super(props);
        this.state = {
            marca: props.marca || "Não informada", 
            ligado: false,
            embreagemLigada:false,
            marcha: 0,
            velocidade: 0,
            velocidadeMaxima: props.velocidadeMaxima || 0
        }
        this.audioRef = React.createRef(); // cria referencias para componentes de classe (muda sem atualzar o componente)
    }

    render(){
        return (
            <>
            <div className={"div-centralizada"} style={{fontSize: '1.3em'}}>
                <h1>Carro {this.state.marca}</h1>
                <img src= {this.props.imagem} alt="imagem-carro" style={{width: "15%", cursor: 'pointer'}} onClick={()=> this.tocarSom(Buzina)}/>
                <p>Ligado: {this.state.ligado? "Sim" : "Não"}</p>
                <p>Velocidade máxima: {this.state.velocidadeMaxima} Km/h</p>
                <p>Velocidade atual: {this.state.velocidade} km/h</p>
                <label htmlFor="i-marcha">Marcha: {this.state.marcha > 0? this.state.marcha + "º" : "Nenhuma"}</label>
                <p>
                    <input
                        type="range"
                        ref={this.inputMarchaRef}
                        value={this.state.marcha}
                        max="5"
                        id="i-marcha"
                        onChange={(evt)=> this.trocarMarcha(evt)}
                    />
                </p>
                <div>
                    <button className="btn" onClick={()=> this.ligarDesligar()}>{this.state.ligado? "Desligar carro" : "Ligar carro"}</button>
                    <button className="btn" onClick={()=> this.pisarSoltarEmbreagem()}>{this.state.embreagemLigada? "Soltar embreagem" : "Pisar na embreagem"}</button>
                    <button className="btn" onClick={()=> this.acelerar()}>Acelerar</button>
                    <button className="btn" onClick={()=> this.frear()}>Frear</button>
                </div>
            </div>
            <audio ref={this.audioRef}/>
            </>
        );
        // OBS: Usar uma função callback no setState previne erros inesperados de acesso/renderização de state e calculos com props. Esses problemas ocorrem pq o setState é assíncrono.
        //Ex: setState(prevState => this.state.ligado = !prevState.ligado)
    }

    ligarDesligar(){
        const carroLigado = this.state.ligado;
        this.setState({ligado: !carroLigado});
      
        if(!carroLigado){
            this.tocarSom(Ligando, 2);
            this.setState({velocidade: 0});
        }
        else{
            this.pararSom();
        }
    }

    pisarSoltarEmbreagem(){
        const carroLigado = this.state.ligado;
        if(carroLigado) this.setState({embreagemLigada: !this.state.embreagemLigada});
    }

    trocarMarcha(evt){
        const embreagemLigada = this.state.embreagemLigada;
        const novaMarcha = parseInt(evt.target.value);
      
        if(embreagemLigada){
            this.setState({marcha: novaMarcha});
        }
    }

    acelerar(){
        const carroLigado = this.state.ligado;
        const embreagemLigada = this.state.embreagemLigada;
        const marcha = this.state.marcha;
        const velocMax = this.state.velocidadeMaxima;
        const velocAtual = this.state.velocidade;
        let velocMarcha; 

        if(carroLigado && !embreagemLigada){
            switch(marcha){
                case 1: velocMarcha = 10; break;
                case 2: velocMarcha = 20; break;
                case 3: velocMarcha = 30; break;
                case 4: velocMarcha = 40; break;
                case 5: velocMarcha = 60; break;
                default: velocMarcha = 0; 
            }
            if(velocAtual < velocMax){
                this.tocarSom(Acelerando)
                this.setState({velocidade: this.state.velocidade + velocMarcha});
            }
        }   
    }

    frear(){
        const velocAtual = this.state.velocidade;
        const carroLigado = this.state.velocidade;

        if(velocAtual > 0 && carroLigado){
            this.tocarSom(Freando, 2);
            this.setState({velocidade: 0});
        }
    }

    tocarSom(som, inicioSegundos){
        const segundos = inicioSegundos || 0;
        this.audioRef.current.src = som;
        this.audioRef.current.currentTime = segundos;
        this.audioRef.current.play();
    }

    pararSom(){
        this.audioRef.current.pause();
        this.audioRef.current.currentTime = 0;
    }
}