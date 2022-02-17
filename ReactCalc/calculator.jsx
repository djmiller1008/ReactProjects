import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "",
            num2: "",
            result: ""
        }
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.reset = this.reset.bind(this);
    }

    setNum1(e) {
        this.setState({ num1: parseInt(e.currentTarget.value) });
    }

    setNum2(e) {
        this.setState({ num2: parseInt(e.currentTarget.value) });
    }

    add(e) {
        this.setState({ result: this.state.num1 + this.state.num2 });
    }

    multiply(e) {
        this.setState({ result: this.state.num1 * this.state.num2 });
    }

    subtract(e) {
        this.setState({ result: this.state.num1 - this.state.num2 });
    }

    divide(e) {
        this.setState({ result: this.state.num1 / this.state.num2 });
    }

    reset(e) {
        e.preventDefault();
        this.setState({ num1: "", num2: "", result: "" });
    }


    render() {
        const { num1, num2, result } = this.state;
        return (
            <div>
                <h1>{result}</h1>
                <input onChange={this.setNum1} value={num1} type="text" className="input" />
                <br/><br/>
                <input onChange={this.setNum2} value={num2} type="text" className="input-2" />
                <br/><br/>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
                <br/>
                <br/>
                <button onClick={this.reset}>Reset</button>

                
            </div>
        )
    }
}

export default Calculator;