import React, {Component} from 'react';

class Earthquake extends Component{

    render(){
      return (
        <div className="earthquake">
          <div className='details' height="200px">
            <h3>{this.props.properties.place}</h3>
            <h3>{this.props.mag}</h3>
          </div>
        </div>
      )
    };
  };

export default Earthquake;
