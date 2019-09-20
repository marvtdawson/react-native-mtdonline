import React, { Component } from 'react';
import './App.css';
import Index from "../Portfolio";
import Intro from "../Intro";
import Series from "../../containers/Series";
import 'whatwg-fetch';


class App extends Component {




    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to MTD Online.net!</h1>
        </header>
          <Intro message="Here you can find my most recent works"/>
          <Index />

          <Series />
      </div>
    );
  }
}

export default App;
