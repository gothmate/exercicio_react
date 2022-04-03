import React, {useState} from "react";
import Sub from './Sub'

export default function Super(props) {

    const [valor, setValor] = useState(0);

    function quandoClicar(valorGerado) {
        setValor(valorGerado);
    }
    
    return (
        <div>
            <h3>Valor: {valor}</h3>
            
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}