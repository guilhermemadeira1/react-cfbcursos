import React, {useState, useRef, useEffect} from 'react';
import BotaoDigito from './BotaoDigito';
import BotaoFuncao from './BotaoFuncao';

export default function Calculadora(){
    const calculoVazio = "AC"; // valor que representa o calculo vazio
    const [calculo, setCalculo] = useState(calculoVazio);
    const [resultado, setResultado] = useState("0");
    const [calculoAutomatico, setCalculoAutomatico] = useState(false);
    const [permiteOperador, setPermiteOperador] = useState(true);
    const [permitePonto, setPermitePonto] = useState(true);
    const [parentesesAberto, setParentesesAberto] = useState(true);
    const calculoRef = useRef();

    useEffect(() => { // executa quando calculo e calculoAutomatico forem atualizados
        if(calculoAutomatico && calculo !== calculoVazio) calcular();
    }, [calculo, calculoAutomatico]);

    useEffect(()=>{ // executa quando o calculo for atualizado
        if(calculo === calculoVazio){
            setResultado("0");
            setParentesesAberto(true);
            setPermiteOperador(true);
            calculoRef.current.classList.add("calculo-vazio");
        }
        else{
            calculoRef.current.classList.remove("calculo-vazio");
        }
    },[calculo]);

    const addDigito = (d) =>{
        const operadores = ["+", "-", "*", "/", "**"];
        const ehOperador = (c) => operadores.includes(c);

        if(calculo === calculoVazio){
            setCalculo(""); // limpa para não aparecer os caracteres que representam calculo vazio
        }
        if(ehOperador(d)){
            if(!permiteOperador){
                return;
            } 
            if(calculo === calculoVazio && (d === "*" || d === "/" || d === "**")){
                setCalculo(calculoVazio); // adiciona calculo vazio para substittuir o "" 
                return;
            }
            setCalculo(calc => calc + d);
            setPermiteOperador(false);
            setPermitePonto(false);
            return;
        }
        else{
            if(d === "("){
                if(parentesesAberto){
                    setCalculo(calc => calc + "(");
                    setParentesesAberto(false);
                }
                else{
                    setCalculo(calc => calc + ")");
                    setParentesesAberto(true);
                }
                setPermiteOperador(false);
                setPermitePonto(false);
                return;
            }
            if(d === "."){
                if(permitePonto){
                    if(calculo === calculoVazio){
                        setCalculo("0.");
                    }
                    else{
                        setCalculo(calc => calc + ".");
                    }
                    setPermitePonto(false);
                    setPermiteOperador(false);
                }
                return;
            }
            setCalculo(calc => calc + d); // adiciona dígitos numéricos
            setPermiteOperador(true);
            setPermitePonto(true);
        }
    }

    const clear = () =>{
        setCalculo(calculoVazio);
    }

    const backSpace = () =>{
        if(calculo === calculoVazio) return;
        setCalculo(calc => calc.slice(0, -1));
        if(calculo.length === 1) setCalculo(calculoVazio);
    }

    const copiar = () =>{
        navigator.clipboard.writeText(resultado);
    }
    
    const calcular = () =>{
        if(calculo !== calculoVazio){
            try{
                let res = eval(calculo);
                if(isNaN(res) || res === Infinity){ // quando o cálculo for inválido ou divisão por 0 que resulta em Infinity
                    res = "Erro";
                }
                setResultado(res);
            }
            catch{
                setResultado("Erro");
            }
        }
    }

    const handleCalculoAutomatico = () =>{
         setCalculoAutomatico(ca => !ca);
    }

    return(
        <div className="calculadora">
            <button className="btn btn-calculo-automatico" onClick={handleCalculoAutomatico}>Cálculo: {calculoAutomatico? "automático" : "manual"}</button>
            <span className="calculo" ref={calculoRef}>{calculo}</span>
            <span className="resultado">{resultado}</span>
            <div className="div-botoes">
                <BotaoFuncao texto="AC" funcao={clear} classe="btn btn-func"/>
                <BotaoFuncao texto="<-" funcao={backSpace} classe="btn btn-func"/>
                <BotaoFuncao texto="[]" funcao={copiar} classe="btn btn-func"/>
                <BotaoDigito digito="+" addDigito={addDigito} classe="btn btn-op"/>

                <BotaoDigito digito="7" addDigito={addDigito} classe="btn"/>
                <BotaoDigito digito="8" addDigito={addDigito} classe="btn"/>
                <BotaoDigito digito="9" addDigito={addDigito} classe="btn"/>
                <BotaoDigito digito="-" addDigito={addDigito} classe="btn btn-op"/>
               
                <BotaoDigito digito="4" addDigito={addDigito} classe="btn"/>
                <BotaoDigito digito="5" addDigito={addDigito} classe="btn"/>
                <BotaoDigito digito="6" addDigito={addDigito} classe="btn"/>
                <BotaoDigito digito="*" addDigito={addDigito} classe="btn btn-op"/>
                
                <BotaoDigito digito="1" addDigito={addDigito} classe="btn"/>
                <BotaoDigito digito="2" addDigito={addDigito} classe="btn"/>
                <BotaoDigito digito="3" addDigito={addDigito} classe="btn"/>
                <BotaoDigito digito="/" addDigito={addDigito} classe="btn btn-op"/>
            
                <BotaoDigito digito="." addDigito={addDigito} classe="btn"/>
                <BotaoDigito digito="0" addDigito={addDigito} classe="btn"/>
                <BotaoDigito digito="(" addDigito={addDigito} classe="btn"/>
                <BotaoDigito digito="**" addDigito={addDigito} classe="btn btn-op"/>
            
                <BotaoFuncao texto="=" funcao={calcular} classe="btn btn-func btn-igual"/>
            </div>
        </div>
    );
}