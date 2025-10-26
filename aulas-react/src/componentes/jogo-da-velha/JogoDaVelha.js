import React, {useEffect, useState, useRef} from 'react';
import Tabuleiro from './Tabuleiro';
import '../../estilos/jogo-da-velha.css';

export default function JogoDaVelha(){
    const escolherJogador = () =>{
        const jogadores =  ["X","O"];
        return jogadores[Math.round(Math.random())];
    }

    const jogarIA = (evt) =>{
        if(fimDeJogo) return;
        const novoTabuleiro = tabuleiroAtual.map(linha => [...linha]);
        let linha, coluna;
        do{
            linha = Math.round(Math.random()*2); // numero aleatorio entre 0 e quase 2 arredondado
            coluna = Math.round(Math.random()*2);
        }
        while(novoTabuleiro[linha][coluna] !== "");
    
        setTimeout(()=>{
            novoTabuleiro[linha][coluna] = jogadorAtual;
        }, 3000);

        ultimoJogadorRef.current = jogadorAtual;
        jogadorAtual === "X"? setJogadorAtual("O") : setJogadorAtual("X");  
    }

    const [jogadorAtual, setJogadorAtual] = useState(escolherJogador());
    const [fimDeJogo, setFimDeJogo] = useState(false);
    const ultimoJogadorRef = useRef(null);

    const tabuleiroVazio = [
        ["", "", ""], 
        ["", "", ""], 
        ["", "", ""]
        /*
        L0C0 L0C1 L0C2
        L1C0 L1C1 L1C2
        L2C0 L2C1 L2C2
        */
    ];
    const [tabuleiroAtual, setTabuleiroAtual] = useState(tabuleiroVazio);

    useEffect(()=>{
        console.log(tabuleiroAtual);
        const vencedor = verificarVencedor();
        if(vencedor){
            alert(`Jogador ${vencedor} venceu. Fim de jogo!`);
            setFimDeJogo(true);
        }
        else if(!vencedor && !temCelulaVazia()){
            alert("Empate. Fim de jogo!");
            setFimDeJogo(true);
        }
       
   },[tabuleiroAtual]);

    const jogar = (evt) => {
        //console.log(tabuleiroAtual);
        const valorCelula = evt.target.innerText;
        const posicao = evt.target.dataset.posicao;
        let novoTabuleiro = tabuleiroAtual.map(linha => [...linha]); // cria uma cópia do tabuleiro e cópias das linhas em vez de copiar as referencias dos arrays externo e internos para evitar erro de atualização de estado

        if(!valorCelula && !fimDeJogo){
            const [linha, coluna] = posicao.split("-");
            novoTabuleiro[linha][coluna] = jogadorAtual;
            setTabuleiroAtual(novoTabuleiro);
            ultimoJogadorRef.current = jogadorAtual;
            jogadorAtual === "X"? setJogadorAtual("O") : setJogadorAtual("X");  
        }
    }

    const temCelulaVazia = () =>{
        for(let lin=0; lin<3; lin++){
            for(let col=0; col<3; col++){
                if(tabuleiroAtual[lin][col] === "") return true;
            }
        }
        return false;
    }

    const quantidadeCelulasVazias = () =>{
        let quanti = 0;
        for(let lin=0; lin<3; lin++){
            for(let col=0; col<3; col++){
                if(tabuleiroAtual[lin][col] === "") quanti++;
            }
        }
        return quanti;
    }

    const reiniciarJogo = () => {
        setFimDeJogo(false);
        setJogadorAtual(escolherJogador());
        ultimoJogadorRef.current = null;
        setTabuleiroAtual(tabuleiroVazio);
    }

    const verificarVencedor = () => {
        let pontos = 0;
        let vencedor = null;
        const ultimoJogador = ultimoJogadorRef.current;

        // verificar vertical
        for(let col=0; col<3; col++){
            pontos = 0; // zera os pontos para contar na próxima coluna
            for(let lin=0; lin<3; lin++){
                if(tabuleiroAtual[lin][col] === ultimoJogador) pontos++;
            }
            if(pontos === 3){
                vencedor = ultimoJogador; // jogador antes de trocar a vez na última jogada
                break;
            }
        }

        // verificar horizontal
        for(let lin=0; lin<3; lin++){
            pontos = 0; // zera os pontos para contar na próxima coluna
            for(let col=0; col<3; col++){
                if(tabuleiroAtual[lin][col] === ultimoJogador) pontos++;
            }
            if(pontos === 3){
                vencedor = ultimoJogador; // jogador antes de trocar a vez na última jogada
                break;
            }
        }
       
        // verificar diagonal 1 \
        if(tabuleiroAtual[0][0] === ultimoJogador && tabuleiroAtual[1][1] === ultimoJogador && tabuleiroAtual[2][2] === ultimoJogador){
            vencedor = ultimoJogador;
        }

        // verificar diagonal 2 /
        if(tabuleiroAtual[0][2] === ultimoJogador && tabuleiroAtual[1][1] === ultimoJogador && tabuleiroAtual[2][0] === ultimoJogador){
            vencedor = ultimoJogador;
        }

        return vencedor;
    }

    return(
        <div className="jogo">
            <h1>Jogo da Velha</h1>
            <p>Vez do jogador: {jogadorAtual}</p>
            <p>Jogadas possíveis: {quantidadeCelulasVazias()}</p>
            <Tabuleiro tab={tabuleiroAtual} jogar={jogar}/>
            {fimDeJogo && <button className="btn" onClick={reiniciarJogo}>Reiniciar jogo</button>}
            
        </div>
    );   
}