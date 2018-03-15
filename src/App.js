import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // operator button - handle calculation
  constructor() {
    this.state = { currValues: [] };
    this.storeValues = this.storeValues.bind(this);
  }

  storeValues() {

  }
  render() {
    return (
      <div className="App">
        <input type="text" disabled></input>
        <div>
          <button className="num-btn">7</button>
          <button className="num-btn">8</button>
          <button className="num-btn">9</button>
          <button className="operator-btn">/</button>
        </div>
        <div>
          <button className="num-btn">4</button>
          <button className="num-btn">5</button>
          <button className="num-btn">6</button>
          <button className="operator-btn">*</button>
        </div>
        <div>
          <button className="num-btn">1</button>
          <button className="num-btn">2</button>
          <button className="num-btn">3</button>
          <button className="operator-btn">-</button>
        </div>
        <div>
          <button className="num-btn">0</button>
          <button className="operator-btn">+</button>
          <button className="operator-btn">=</button>
        </div>

      </div>
    );
  }
}

export default App;
