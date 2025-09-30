import React, {useState} from 'react';
import Lampada from '../../componentes/Lampada';

function App(){
    const [on, setOn] = useState(false);
    return (
        <>
             <p style={{fontSize: '1.5em', margin: '0px'}}>A lâmpada está: {on? 'Ligada': 'Desligada'}</p>
            <Lampada on={on} setOn= {setOn}/>
       
        </>
    );
}
export default App;