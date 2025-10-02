import React, {useState} from 'react';

function App(){
    const [dados, setDados] = useState({nome: "", curso: "", ano: ""});

    const handleChange = (evt) => {
        const entrada = evt.target.value;
        const name = evt.target.name;
        switch(name){
            case "nome":
                setDados({...dados, nome: entrada}); break;
            case "curso":
                setDados({...dados, curso: entrada}); break;
            case "ano":
                setDados({...dados, ano: entrada}); break;
        }
    }
    return (
        <>
          <h1>Dados num único state</h1>
            <main >       
                <form action="#">
                    <div style={{marginBottom: "5px"}}>
                        <label htmlFor="i-nome">Nome: </label>
                        <input type="text" name="nome" id="i-nome" onChange={(e)=> handleChange(e)}/>
                    </div>
                    <div style={{marginBottom: "5px"}}>
                        <label htmlFor="i-curso">Curso: </label>
                        <input type="text" name="curso" id="i-curso" onChange={(e)=> handleChange(e)}/>
                    </div>
                    <div style={{marginBottom: "30px"}}>
                        <label htmlFor="i-ano">Ano: </label>
                        <input type="text" name="ano" id="i-ano" onChange={(e)=> handleChange(e)}/>
                    </div>
                    <div>
                        <p >Nome: {dados.nome} </p>
                        <p>Curso: {dados.curso}</p>
                        <p>Ano: {dados.ano}</p>
                    </div>
                </form>
            </main>
        </>
    );
    // Evitar alterar os dados do objeto no state diretamente.
}
export default App;