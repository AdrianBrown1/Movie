import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/header/header'

export default class Landingpage extends Component {

  static propTypes = {
    // fetchWeather: PropTypes.func,
    // resetWeatherState: PropTypes.func,
    // weather: PropTypes.object,
  }
  
  _transitionToNextScreen = () => {
    console.log('POOP');
  }

  render() {
    console.log(this.props);
    const { history } = this.props;
    console.log(history);
    return (
      <div className="landing-page__container">
        <Header history={history}/>
         <div className='landing-page'>
          <span className='landing-page__title'>Welcome To FavMovies!</span>
          <button className='landing-page__button' onClick={this._transitionToNextScreen}>Enter</button>
         </div>
      </div>
    );
  }
}
