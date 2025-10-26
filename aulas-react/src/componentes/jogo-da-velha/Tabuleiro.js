import React from 'react';

export default function Tabuleiro({tab, jogar}){
    const corO = {color: "#00f"};
    const corX = {color: "#f00"};
    return(
        <div className="tabuleiro">
            <div className="linha">
                <div className="coluna" 
                     style={tab[0][0] === "X"? corX : corO} 
                     data-posicao="0-0" 
                     onClick={(e)=> jogar(e)}>
                        {tab[0][0]}
                </div>
                <div className="coluna" 
                     style={tab[0][1] === "X"? corX : corO} 
                     data-posicao="0-1" 
                     onClick={(e)=> jogar(e)}>
                        {tab[0][1]}
                </div>
                <div className="coluna" 
                     style={tab[0][2] === "X"? corX : corO} 
                     data-posicao="0-2" 
                     onClick={(e)=> jogar(e)}>
                        {tab[0][2]}
                </div>
            </div>
            <div className="linha">
                <div className="coluna" 
                     style={tab[1][0] === "X"? corX : corO} 
                     data-posicao="1-0" 
                     onClick={(e)=> jogar(e)}>
                        {tab[1][0]}
                </div>
                <div className="coluna" 
                     style={tab[1][1] === "X"? corX : corO} 
                     data-posicao="1-1" 
                     onClick={(e)=> jogar(e)}>
                        {tab[1][1]}
                </div>
                <div className="coluna" 
                     style={tab[1][2] === "X"? corX : corO} 
                     data-posicao="1-2" 
                     onClick={(e)=> jogar(e)}>
                        {tab[1][2]}
                </div>
            </div>
            <div className="linha">
                <div className="coluna" 
                     style={tab[2][0] === "X"? corX : corO} 
                     data-posicao="2-0" 
                     onClick={(e)=> jogar(e)}>
                        {tab[2][0]}
                </div>
                <div className="coluna" 
                     style={tab[2][1] === "X"? corX : corO} 
                     data-posicao="2-1" 
                     onClick={(e)=> jogar(e)}>
                        {tab[2][1]}
                </div>
                <div className="coluna" 
                     style={tab[2][2] === "X"? corX : corO} 
                     data-posicao="2-2" 
                     onClick={(e)=> jogar(e)}>
                        {tab[2][2]}
                </div>
            </div>
        </div>
    );   
}