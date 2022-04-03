import React from "react";
import Filho from './Filho'

export default function Pai(props) {
    return (
        <div>
            <h3>{props.children} {props.sobrenome}</h3>
            <Filho {...props}>Lucas</Filho>
            <Filho sobrenome={props.sobrenome}>Pedro</Filho>
            <Filho {...props}>Luna</Filho>
        </div>
    )
}