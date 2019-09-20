import React, { Component } from 'react';
import './App.css';
import Index from "../Portfolio";
import Series from "../../containers/Series";
import 'whatwg-fetch';


class App extends Component {
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to MTD Online.net!</h1>
        </header>
          <Index />
          <Series />
      </div>
    );
  }
}

export default App;
