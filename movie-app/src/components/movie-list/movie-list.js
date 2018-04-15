import React from 'react';
import MovieListItem from '../movie-list-item/movie-list-item';


const MovieList = (props) => {
  
  const { movies, history } = props;
  if(!movies) return null;
  const moviesArr = movies.movies;
  let halfWayThough = Math.floor(moviesArr.length / 2)
  let moviesColumn1 = moviesArr.slice(0, halfWayThough);
  let moviesColumn2 = moviesArr.slice(halfWayThough, moviesArr.length);

  console.log(props);
  return (
    <div className='movie-lists'>
      <ul className='movie-list'>
        {moviesColumn1.map((movie) => 
          <MovieListItem 
            movie={movie} 
            history={history} 
            key={Math.random()}
          />
        )}
      </ul>
      <ul className='movie-list'>
        {moviesColumn2.map((movie) => 
          <MovieListItem 
            movie={movie} 
            history={history} 
            key={Math.random()}
          />
        )}
      </ul> 
    </div>
  )
}

export default MovieList;