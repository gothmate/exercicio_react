import React from "react";
import './App.css';
import './index.css'
import Primeiro from './components/basics/Primeiro'
import ComFilhos from './components/basics/ComFilhos'
import ComParametro from './components/basics/ComParametro'
import Card from './components/layout/Card';
import Repeticao from "./components/basics/Repeticao";
import Condicional from "./components/basics/Condicional";
import Pai from "./components/comunication/direct/Pai";
import Super from "./components/comunication/indireta/Super";
import Input from "./components/form/Input";
import Counter from "./components/Counter/Counter";

export default function App(props) {
    return (
        <div className="App">

            <Card titulo="#9 - Contador" color="#8874a3">
                <Counter step={10} value={100}></Counter>
            </Card>

            <Card titulo="#8 - Input" color="#3d1e6d">
                <Input></Input>
            </Card>

            <Card titulo="#7 - Comunicação indireta" color="#3d2352">
                <Super></Super>
            </Card>

            <Card titulo="#6 - Comunicação direta" color="#2e003e">
                <Pai sobrenome="Jansen">João</Pai>
            </Card>

            <Card titulo="#5 - Condicional" color="#343d46">
                <Condicional numero={10}></Condicional>
            </Card>

            <Card titulo="#4 - Repetição" color="#4f5b66">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#3 - Componente com children" color="#65737e">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#2 - Componente com parâmetros" color="#a7adba">
                <ComParametro 
                    titulo="Esse é um título" 
                    subtitulo="Esse um subtítulo"
                />
            </Card>
            <Card titulo="#1 - Criando um Componente simples" color="#c0c5ce">
                <Primeiro />
            </Card>
        </div>
    )
}