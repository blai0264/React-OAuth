import React, { Component } from 'react';
import './App.css';
import Facebook from './component/Facebook';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>A simple app that uses Facebook OAuth to authenticate</p>
          <Facebook/>
      </div>
    );
  }
}

export default App;
