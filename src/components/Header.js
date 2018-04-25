import React from 'react';

const Header = (props) =>{
  return(
    <div>
      <h1>Earthquake Tracker</h1>
      <p>Using real time information from the US Geological Survey, you can view information about all of the global seismic activity over the last 30 days.
        Select an earthquake from the dropdown below to find out more.</p>
        <select onChange={props.handleSelectChange}>
                {props.filters.map(filter => {
                  return <option key={filter.name} value={filter.url}>{filter.name}</option>
                })}
              </select>
      </div>
    )
  }

  export default Header;
