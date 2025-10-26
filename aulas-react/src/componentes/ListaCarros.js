import {useState, useEffect} from "react";
import axios from 'axios';

export default function ListaCarros(){
    const [carros, setCarros] = useState([]);
    
    const consumirApi = async () => {
        try{
            const response = await axios.get("http://localhost:3000");
            setCarros(response.data);
        }
        catch(erro){
            console.log(erro);
        }
    }

    useEffect(()=>{ // a callback do useEffect nao pode ser assincrona
        consumirApi();
    }, []);

    return(
        <>
            <h1>Consumindo API com axios e componente funcional</h1>
            <ul>
                {carros.map(c => <li key={c.id}>{`${c.marca} - ${c.modelo}`}</li>)}
            </ul>
        </>
    );
}