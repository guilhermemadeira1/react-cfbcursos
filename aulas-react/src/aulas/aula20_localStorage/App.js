import {useState} from 'react';

const div ={marginBottom: "20px", marginTop: "20px"};

function App(){
    const [nome, setNome] = useState("");

    const setCookie = (key, value, days)=>{
        document.cookie = `${key}=${value}; max-age=${days*86400}; path=/`; 
        //cookie global com 1 dia de validade
        // 1 dia = 86400 segundos
    }

    const getCookie =  (key)=>{
        const cookies = document.cookie.split(";");
        for(let c of cookies){
            const [k, value] = c.split("="); //pega a primeira ocorrência do vetor de chave e valor, que é a chave e o valor do cookie
            if(k.trim() === key){
                return value;
            }
        }
        return undefined;
    }

    const getAllCookies = () => {
        const cookies = document.cookie.split(";");
        const keyValueList = [];
        for(let c of cookies){
            const [k, v] =  c.split("=");
            if(!k && !v){
                continue;
            }
            keyValueList.push({key: k, value: v});
        };
        console.log(keyValueList);
        return keyValueList;
    }

    const removeCookie = (key)=>{
        document.cookie = `${key}=; max-age=0; path=/`; //sobrescreve o cookie com valor vazio e para expirar em 0 segundos
    }

    const getLocalStorage = () =>{
        const storage = [];
        for (let i = 0; i < localStorage.length; i++){
            const k = localStorage.key(i)
            const v = localStorage.getItem(k);
            storage.push({key: k, value: v});
        }
        console.log(storage);
        return storage; // retorna um array de objetos key-value
    }

    const getSessionStorage = () =>{
        const storage = [];
        for (let i = 0; i < sessionStorage.length; i++){
            const k = sessionStorage.key(i)
            const v = sessionStorage.getItem(k);
            storage.push({key: k, value: v});
        }
        console.log(storage);
        return storage; // retorna um array de objetos key-value
    }

    const showStorage = (storage)=>{
        let str =  "";
        if(storage.length > 0){
            storage.forEach(data => {
                str += `${data.key} = ${data.value}\n`
            });
        }
        else{
            str = "Está vazio."
        }
        alert(str); // une os objetos em uma string e exibe no alert
    }

    return (
        <>
            <h1>Armazenamento local no navegador</h1>
            <label htmlFor="i-nome">Nome: </label>
            <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
            <p>State: {nome}</p>
            <div style={div}>
                <button onClick={()=> localStorage.setItem("local-nome", nome)}>Adicionar no localStorage</button>
                <button onClick={()=> localStorage.removeItem("local-nome")}>Remover do localStorage</button>
                <button onClick={()=> showStorage(getLocalStorage())}>Exibir localStorage</button>
            </div>
            <div style={div}>
                <button onClick={()=> sessionStorage.setItem("session-nome", nome)}>Adicionar no sessionStorage</button>
                <button onClick={()=> sessionStorage.removeItem("session-nome")}>Remover do sessionStorage</button>
                <button onClick={()=> showStorage(getSessionStorage())}>Exibir sessionStorage</button>
            </div>
            <div style={div}>
                <button onClick={()=> setCookie("cookie-nome", nome, 365)}>Adicionar cookie</button>
                <button onClick={()=> removeCookie("cookie-nome")}>Remover cookie</button>
                <button onClick={()=> showStorage(getAllCookies())}>Exibir cookies da página</button>
            </div>
        </>
    );
}
export default App;

/*
    web Apis de armazenamento do navegador

    localStorage -> armazena dados chave-valor persistentes no navegador (até ~5MB por cada dado) até serem explicitamente apagados. Ex:

    localStorage.setItem('chave', 'valor'); // salva o dado chave-valor no localStorage
    localStorage.getItem('chave'); // obtém o valor pela chave 
    localStorage.removeItem('chave'); // remove o dado pela chave
    localStorage.clear(); // limpa todos os dados do localStorage
    localStorage.key(index) // acessa a chave do dado no localStora na posição do index (começando por 0)

    sessionStorage -> armazena dados chave-valor (Até ~5MB por dado) que persistem a cada sessão, ou seja,  até a aba ou o navegador serem fechados.

    sessionStorage.setItem('chave', 'valor'); // salva o dado chave-valor no sessionStorage
    sessionStorage.getItem('chave'); // obtém o valor pela chave
    sessionStorage.removeItem('chave'); // remove o dado pela chave
    sessionStorage.clear(); // limpa todos os dados do sessionStorage explicitamente. 
    sessionStorage.key(index) // acessa a chave do dado no sessionStorage na posição do index (começando por 0)

    OBS: localStorage e sessionStorage são usados para dados
    locais no navegador que não precisam ser enviados a um servidor.

    cookies -> armazenam dados chave-valor (~4KB por dado), com uma dada progrmada para expirar, que podem ser usados localmente ou eviados para servidor através de cabeçalhos da requisição HTTP.
    São analisados por algoritmos para identificar preferências e comportamento dos usuários.

    document.cookie -> armazena a string que contém todos os cookies de um domínio acessado. 

    Ex: document.cookie = "usuario=João; expires= Fri 10 Oct 23:59:59 UTC; path=/;"

    // adiciona um cookie com chave "usuario" e valor "João" válido até 10 de outubro antes da meio noite (no fuso Horário Universal Coordenado - UTC)e é acessível em qualquer parte do site (path=/).

    document.cookie = "preferencia=esportes; max-age= 604800; path=/"

    // adiciona um cookie com chave "preferencia" e valor "esportes" com validade de 7 dias (604800 segundos)

    OBS: Os cookies são adicionados com sinal de atribuição e não concatenação.

	Ex: document.cookie = "usuario= João; expires= Fri 10 Oct 23:59:59 UTC; path=/;
            document.cookie = "preferencia=esportes;ss max-age= 604800; path=/";

	    //Adiciona dois cookies
*/