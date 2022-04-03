import './Card.css'
import React from "react";

export default function Card(props) { 
    return (
        <div className="Card" style={{backgroundColor: props.color}}>
            <div className="Footer">
                {props.titulo}
            </div>
            <div className="Conteudo" style={{borderColor: props.color}}>
                {props.children}
            </div>
        </div>

    )
}