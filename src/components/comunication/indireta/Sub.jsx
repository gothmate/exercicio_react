import React from "react";


export default function Sub(props) {
    return (
        <div>
            <p>{props.children}</p>
            <button onClick={() => {
                props.onClicar(Math.random());
            }}>Alterar</button>
        </div>
    )
}