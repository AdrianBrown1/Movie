import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header'

export default class Landingpage extends Component {

  static propTypes = {
    fetchMovies: PropTypes.func,
    movies: PropTypes.object,
  }
  // componentDidMount() {
  //   const { fetchMovies } = this.props;
  //   fetchMovies();
  // }

  _transitionToNextScreen = () => {
    const { history } = this.props;
    history.push('/movie-list');
  }

  render() {
    console.log(this.props);
    const { history, movies } = this.props;
    if(!movies) return null;
    // Pass movies to next screen component.
    console.log('HELLO WORLD ****', movies.movies);
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
