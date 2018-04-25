import React, { Component } from 'react';
import QuakeContainer from './containers/QuakeContainer';
import './App.css';

class App extends Component {
  render() {
    const filters = [
      {name: "All", url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"},
      {name: "Sig", url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"},
      {name: "Sml", url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson"},
      {name: "Med", url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson"},
      {name: "Lge", url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"},
    ]


    return (
      <QuakeContainer filters={filters} />
    );
  }
}

export default App;
