import React, {Component} from 'react';
import QuakeList from '../components/QuakeList';
import Header from '../components/Header';

class QuakeContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      quakes: []
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    this.loadEarthquakes(this.props.filters[0].url)
  }

  loadEarthquakes(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        {debugger};
        const jsonString = request.responseText;
        const quakesArray = JSON.parse(jsonString)
        this.setState({quakes: quakesArray.features});
      }
    };
    request.send();
  }

  handleSelectChange(event) {
    this.loadEarthquakes(event.target.value);
  }

  render() {
    return (
      <div>
        <Header
          handleSelectChange={this.handleSelectChange}
          filters={this.props.filters}
        />
        <QuakeList
          quakes={this.state.quakes}
          url={this.props.filters[0].url}
          handleSelectChange={this.handleSelectChange}
        />
      </div>
    )
  }
}

export default QuakeContainer;
