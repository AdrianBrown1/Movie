import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header'
export default class Dashboard extends Component {

  static propTypes = {
    // fetchWeather: PropTypes.func,
    // resetWeatherState: PropTypes.func,
    // weather: PropTypes.object,
  }

  render() {

    return (
      <div className="landing-page">
        <Header/>
        {/* <Tex fetchWeather={fetchWeather} weather={weather} resetWeatherState={resetWeatherState}/>
        <Weather weather={weather}/> */}
      </div>
    );
  }
}