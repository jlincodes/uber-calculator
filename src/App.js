import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // operator button - handle calculation
  constructor(props) {
    super(props);
    this.state = {
      currValues: [],
      operation: "",
    };
    this.storeValues = this.storeValues.bind(this);
    this.storeOperation = this.storeOperation.bind(this);
    this.handleCalc = this.handleCalc.bind(this);
  }

  storeValues(event) {
    event.preventDefault();
    const newValues = this.state.currValues;
    newValues.push(event.target.innerText);
    this.setState({ currValues: newValues });
    // console.log(this.state);
  }

  storeOperation(event) {
    event.preventDefault();

  }

  handleCalc(event) {
    event.preventDefault();

  }

  render() {
    return (
      <div className="App">
        <input type="text" disabled></input>
        <div>
          <button onClick={this.storeValues} className="num-btn">7</button>
          <button onClick={this.storeValues} className="num-btn">8</button>
          <button onClick={this.storeValues} className="num-btn">9</button>
          <button onClick={this.storeOperation} className="operator-btn">/</button>
        </div>
        <div>
          <button onClick={this.storeValues} className="num-btn">4</button>
          <button onClick={this.storeValues} className="num-btn">5</button>
          <button onClick={this.storeValues} className="num-btn">6</button>
          <button onClick={this.storeOperation}className="operator-btn">*</button>
        </div>
        <div>
          <button onClick={this.storeValues} className="num-btn">1</button>
          <button onClick={this.storeValues} className="num-btn">2</button>
          <button onClick={this.storeValues} className="num-btn">3</button>
          <button onClick={this.storeOperation}className="operator-btn">-</button>
        </div>
        <div>
          <button onClick={this.storeValues} className="num-btn">0</button>
          <button onClick={this.storeOperation}className="operator-btn">+</button>
          <button onClick={this.handleCalc} className="operator-btn">=</button>
        </div>

      </div>
    );
  }
}

export default App;
