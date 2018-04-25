import React, {Component} from 'react';
import Earthquake from './Earthquake';

const QuakeList = (props) =>{
  if(props.quakes === null || props.quakes === 0){
    return <p>Updating information...</p>
  }
  return(
    <div>
      {props.quakes.map((earthquake, index) => {
    return (
      <Earthquake
        key={index}
        place={earthquake.place}
        mag={earthquake.mag}
      />
    )
  })}
    </div>
  )
};

export default QuakeList;
