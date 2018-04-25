import React, { Component } from 'react';
import QuakeContainer from './containers/QuakeContainer';
import './App.css';

class App extends Component {
  render() {
    const filters = [
      {name: "Significant", url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"},
      {name: "Mag 1.0 +", url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson"},
      {name: "Mag 2.5 +", url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson"},
      {name: "Mag 4.5 +", url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"},
    ]

    return (
      <QuakeContainer filters={filters} />
    );
  }
}

export default App;
