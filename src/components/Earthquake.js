import React, {Component} from 'react';

class Earthquake extends Component{

    render(){
      return (
        <div className="earthquake">
          <div className='details'>
            <h3>{this.props.place}. {this.props.mag}</h3>
          </div>
        </div>
      );
    }
  };

export default Earthquake;
