import React, { Component } from 'react';
import './App.css';
import Portfolio from './Porfolio/Portfolio';

const Intro = (props) => (
    <p className="App-intro">
        Marvin's Online React Portfolio
    </p>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to MTD Online.net!</h1>
        </header>
          <Intro />
          <Portfolio />
      </div>
    );
  }
}

export default App;
