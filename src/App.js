import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // operator button - handle calculation
  constructor(props) {
    super(props);
    this.state = {
      currValues: "",
      operation: "",
      result: ""
    };
    this.storeValues = this.storeValues.bind(this);
    this.handleCalc = this.handleCalc.bind(this);
    this.clear = this.clear.bind(this);
  }

  storeValues(event) {
    event.preventDefault();
    let newValues = this.state.currValues;
    newValues = newValues + event.target.innerText;
    this.setState({ currValues: newValues });
  }

  handleCalc(event) {
    event.preventDefault();
    const operators = "+-*/";
    const str = (this.state.currValues);
    const arr = str.split('');
    let operator;
    let newResult;

    arr.forEach( el => {
      if (operators.includes(el)) {
        operator = el;
      }
    });

    let values = str.split(operator);

    console.log(values);

    let val1 = parseInt(values[0]);
    let val2 = parseInt(values[1]);

    switch (operator) {

      case ("+"):
        newResult = val1 + val2;
        break;
      case ("-"):
        newResult = val1 - val2;
        break;
      case ("*"):
        newResult = val1 * val2;
        break;
      case ("/"):
        newResult = val1 / val2;
        break;
      default:
        break;
    }

    newResult = newResult.toString();
    this.setState({
      currValues: newResult,
      operation: "",
      result: newResult
    });

    console.log("state", this.state);
  }

  clear(event) {
    event.preventDefault();
    this.setState({
      currValues: "",
      operation: "",
      result: ""
    });
  }

  render() {
    let result = 0;
    if (this.state.result) {
      result = this.state.result;
    } else if (this.state.currValues) {
      result = this.state.currValues;
    }
    return (
      <div className="App">
        <div className="results">
          <span>{result}</span>
        </div>
        <div>
          <button onClick={this.storeValues} className="num-btn">7</button>
          <button onClick={this.storeValues} className="num-btn">8</button>
          <button onClick={this.storeValues} className="num-btn">9</button>
          <button onClick={this.storeValues} className="operator-btn">/</button>
        </div>
        <div>
          <button onClick={this.storeValues} className="num-btn">4</button>
          <button onClick={this.storeValues} className="num-btn">5</button>
          <button onClick={this.storeValues} className="num-btn">6</button>
          <button onClick={this.storeValues} className="operator-btn">*</button>
        </div>
        <div>
          <button onClick={this.storeValues} className="num-btn">1</button>
          <button onClick={this.storeValues} className="num-btn">2</button>
          <button onClick={this.storeValues} className="num-btn">3</button>
          <button onClick={this.storeValues} className="operator-btn">-</button>
        </div>
        <div>
          <button onClick={this.clear} className="clear-btn">C</button>
          <button onClick={this.storeValues} className="num-btn">0</button>
          <button onClick={this.handleCalc} className="operator-btn">=</button>
          <button onClick={this.storeValues}className="operator-btn">+</button>
        </div>

      </div>
    );
  }
}

export default App;
