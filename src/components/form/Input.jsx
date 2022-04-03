import React, {useState} from "react";

export default function Input(props) {
    
    const [nome, setNome] = useState('');  
    
    return (
        <>
            <h3>{nome}</h3>
            <input 
                type="text" 
                onChange={(e) => setNome(e.target.value)} 
                value={nome} 
            />
        </>
    )
}