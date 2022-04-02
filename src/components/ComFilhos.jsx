import React from "react";

export default function ComFilhos(props) {
    return (
        <div>
            <h2>
                Os Filhos:
            </h2>
            <p>{props.children}</p>
        </div>
    )
}