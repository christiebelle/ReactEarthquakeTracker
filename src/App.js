import React, { Component } from 'react';
import QuakeContainer from './containers/QuakeContainer';
import QuakeList from './components/QuakeList';
import Earthquake from './components/Earthquake';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Earthquake Tracker App</h1>
        <QuakeContainer/>
        <QuakeList/>
        <Earthquake/>
      </div>
    );
  }
}

export default App;
