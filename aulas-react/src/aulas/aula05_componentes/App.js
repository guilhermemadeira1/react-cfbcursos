import React from "react";

import Cabecalho from "../../componentes/Header"; //o componente pode ser importado com qualquer nome pois foi exportado como default
import Principal from "../../componentes/Main";
import Rodape from "../../componentes/Footer"

function App(){ // junta os componentes
    return(
        <>
            <Cabecalho/>
            <Principal/>
            <Rodape/>
        </>
    )
}

export default App;