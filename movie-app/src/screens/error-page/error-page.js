import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/header/header'

export default class ErrorPage extends Component {
  
  static propTypes = {
    // fetchWeather: PropTypes.func,
    // resetWeatherState: PropTypes.func,
    // weather: PropTypes.object,
  }


  render() {
    const { history } = this.props;
    return (
      <div className="error__container">
        <Header history={history}/>
        <span className='error__title'> error 404! page not found</span> 
      </div>
    );
  }
}