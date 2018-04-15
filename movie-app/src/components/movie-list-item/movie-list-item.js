  import React from 'react';
  import logo from '../../video-camera.svg';

const MovieListItem = (props) => {
  // console.log('YO YO YO', props);
  const { movie } = props;
  if(!movie) return null;
  const movieImage = movie.Poster;

  const showMovieInfo  = () => {
    console.log('POOP');
    // const { history } = props;
    // history.push('/');
  }
  // console.log('Props', props);
  return (
    <div className='list-item'>
      <button className='list-item__button' onClick={showMovieInfo}>
        <img className='list-item__image' src={movieImage} alt='movie-poster'/>
      </button>
    </div>
  )
}

export default MovieListItem;