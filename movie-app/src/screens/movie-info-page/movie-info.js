import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header'
import MovieList from '../../components/movie-list/movie-list';

export default class MovieInfoPage extends Component {

  static propTypes = {
    fetchMovies: PropTypes.func,
  }


//   _inputSubmit = (e) => {
//     //get value from search form & search for movie!
//     // once movies come back pass movies to movies to movie list. 
//     const { searchMovies } = this.props;
//     const movieTitleToSearch = this.title.value.replace(/\ /g, "+");
//     searchMovies(movieTitleToSearch);
//     e.preventDefault();
//     e.target.reset();
//   }

  render() {
    const { history } = this.props;
    
    return (
      <div className="movie-list__container">
        <Header history={history}/>
         <div>Hello world</div>
      </div>
    );
  }
}