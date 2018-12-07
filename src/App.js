import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './component/Facebook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>A simple app that uses Facebook OAuth to authenticate</p>
          <Facebook/>
        </header>
      </div>
    );
  }
}

export default App;
