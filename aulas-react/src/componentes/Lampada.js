import React from "react";
import lampadaOn from "../componentes/imagens/lampada-on.png";
import lampadaOff from "../componentes/imagens/lampada-off.png";
import "../estilos/div-centralizada.css";
import "../estilos/btn.css";

const img = {
    width: '100px', 
    height: '170px', 
};

function Lampada(props){
    return (
        <>
            <div className="div-centralizada">
                <img style={img} src={props.on? lampadaOn: lampadaOff} alt='lâmpada'/>
                <br/>
                <button className="btn" onClick={()=> props.setOn(!props.on)}>
                    {props.on? 'Desligar':'Ligar'}
                </button>
            </div>
        </>
    );
}
export default Lampada;