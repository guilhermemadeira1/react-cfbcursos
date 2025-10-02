import React from "react";

function EntradaNota({num, nota, setNota}){
    return(
        <div>
            <label htmlFor="i-nota">Insira a nota {num}: </label>
            <input type="number" id="i-nota" name="nota" value={nota} max="10" min="0" onChange={(e)=> setNota(e, num)}/>
            
        </div>
    );
}
export default EntradaNota;