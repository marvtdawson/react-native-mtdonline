import React, { Component } from 'react';
import './App.css';
import Index from "../Portfolio";
import Intro from "../Intro";
import 'whatwg-fetch';


class App extends Component {
    state = {
        series: []
    }

    componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=NCIS')
            .then((response) => response.json())
            .then(json => this.setState({series: json }))
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to MTD Online.net!</h1>
        </header>
          <Intro message="Here you can find my most recent works"/>
          <Index />
          I have {this.state.series.length} favorite TV Series!
      </div>
    );
  }
}

export default App;
