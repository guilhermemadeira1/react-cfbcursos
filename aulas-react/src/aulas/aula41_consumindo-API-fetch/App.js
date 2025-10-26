import {useState, useEffect} from 'react';

export default function App(){
    const [carros, setCarros] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000")
            .then(dadosJson => dadosJson.json())
            .then(carros => setCarros(carros))
            .catch(erro => alert(erro));
    }, []);

    return(
        <>
            <h1>Consumindo API com fetch</h1>
            <ul>
                {carros.map(c => <li key={c.id}>{`${c.marca} - ${c.modelo}`}</li>)}
            </ul>
        </>
    );
}