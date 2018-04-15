import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header'
import MovieList from '../../components/movie-list/movie-list';

export default class MovieListPage extends Component {

  static propTypes = {
    fetchMovies: PropTypes.func,
    movies: PropTypes.object,
    searchMovies: PropTypes.func,
  }

  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  _inputSubmit = (e) => {
    //get value from search form & search for movie!
    // once movies come back pass movies to movies to movie list. 
    const { searchMovies } = this.props;
    const movieTitleToSearch = this.title.value.replace(/\ /g, "+");
    searchMovies(movieTitleToSearch);
    e.preventDefault();
    e.target.reset();
  }

  render() {
    const { history, movies, searchMovies } = this.props;
    
    return (
      <div className="movie-list__container">
        <Header history={history}/>
         <form 
          className='movie-list__form' 
          onSubmit={(e) => this._inputSubmit(e)}
          ref={(input) => this.addItemForm = input}
         >
          <div className='movie-list__input-container'>
            <input 
              className='movie-list__input' 
              type='search' id='search' 
              placeholder='Enter Movie Name'
              ref={(input) => this.title = input}
            />
            <button 
              className='movie-list__input-button'
              onSubmit={(e) => this._inputSubmit(e)}
            >Submit</button>
          </div>
         </form>
         <MovieList movies={movies} history={history} searchMovies={searchMovies}/>
      </div>
    );
  }
}