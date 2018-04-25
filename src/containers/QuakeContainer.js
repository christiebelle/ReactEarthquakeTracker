import React, {Component} from 'react';

class QuakeContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      quakes: [],
      currentQuake: null
    }
  }

  componentDidMount(url){
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const quakesarray = JSON.parse(jsonString);
        this.setState({quakes: quakesarray.features});
      }
    };
    request.send();
  }

  render(){
    return(
      <h2>quake dropdown</h2>
    )
  }
};

export default QuakeContainer;
