import React from "react";

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: props.step || 1,
            value: props.value || 0
        }
    }

    increment = () => {
        this.setState({
            value: this.state.value + this.state.step
        })
    }

    decrement = () => {
        this.setState({
            value: this.state.value - this.state.step
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h4>Passo: {this.state.step}</h4>
                <h4>Valor: {this.state.value}</h4>

                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}