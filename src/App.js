import React, { Component } from 'react';
import QuakeContainer from './containers/QuakeContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Earthquake Tracker App</h1>
        <QuakeContainer/>
      </div>
    );
  }
}

export default App;
