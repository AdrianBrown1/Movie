  import React from 'react';

const MovieListItem = (props) => {

  const { movie } = props;
  if(!movie) return null;
  const movieImage = movie.Poster;

  const showMovieInfo  = () => {
    const { movie, searchMovieID, history } = props;
    const movieID = movie.imdbID;
    searchMovieID(movieID);
    history.push('/movie-info');
  }
 
  return (
    <div className='list-item'>
      <button className='list-item__button' onClick={showMovieInfo}>
        <img className='list-item__image' src={movieImage} alt='movie-poster'/>
      </button>
    </div>
  )
}

export default MovieListItem;