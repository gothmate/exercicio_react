import React from "react";
import './App.css';
import './index.css'
import Primeiro from './components/Primeiro'
import ComFilhos from './components/ComFilhos'
import ComParametro from './components/ComParametro'
import Card from './components/layout/Card';
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";


export default function App(props) {
    return (
        <div className="App">

            <Card titulo="#5 - Condicional">
                <Condicional numero={10}></Condicional>
            </Card>

            <Card titulo="#4 - Repetição">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#3 - Componente com children">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#2 - Componente com parâmetros">
                <ComParametro 
                    titulo="Esse é um título" 
                    subtitulo="Esse um subtítulo"
                />
            </Card>
            <Card titulo="#1 - Criando um Componente simples">
                <Primeiro />
            </Card>
        </div>
    )
}