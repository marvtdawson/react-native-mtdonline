import React, { Component } from 'react';
import './App.css';
import Index from "../Portfolio";
import Intro from "../Intro";


class App extends Component {
    state = {
        programs: []
    }

    componentDidMount() {
        const programs = ["React", "Angular"];
        setTimeout(() => {
            this.setState({programs})
        }, 2000)
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to MTD Online.net!</h1>
        </header>
          <Intro message="Here you can find my most recent works"/>
          <Index />
          I am proficient in {this.state.programs.length} front end frameworks!
      </div>
    );
  }
}

export default App;
