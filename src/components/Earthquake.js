import React, {Component} from 'react';

class Earthquake extends Component{

    render(){
      return (
        <div className="earthquake">
          <ul>
            <li>{this.props.place}</li>
            <li>{this.props.mag}</li>
          </ul>
        </div>
      )
    };
  };

export default Earthquake;
