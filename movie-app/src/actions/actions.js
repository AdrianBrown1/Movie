import { 
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  API_KEY,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
} from '../constants/action-types';
import { BASE_URL, BASE_SEARCH_URL, BASE_SEARCH_MOVIEID_URL, MOVIE_PLOT_PARAM } from '../constants/movie-urls';
// import movie from '../reducers/movie';
  
  export const fetchMovieError = (err) => ({
    type: FETCH_MOVIES_ERROR,
    payload: {
      err,
    },
  });
  
  export const fetchMoviesSuccess = (movies) => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: {
      movies,
    },
  });

  export const fetchMovieInfoSuccess = (movie) => ({
    type: FETCH_MOVIE_SUCCESS, 
    payload: {
      movie,
    },
  });

  export const fetchMovieInfoError = (err) => ({ 
    type: FETCH_MOVIE_ERROR, 
    payload: {
      err,
    },
  });

export const fetchMovies = (param) => (dispatch) => {
  const url = BASE_URL;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
    if(data) {
      const movies = data.Search;
      dispatch(fetchMoviesSuccess(movies));
    } 
  }).catch((err) => { dispatch(fetchMovieError(err)); });
};

export const searchMovies = (param) => (dispatch) => {
  const url = BASE_SEARCH_URL + param + API_KEY;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
    if(data) {
      const movies = data.Search;
      dispatch(fetchMoviesSuccess(movies));
    }
  }).catch((err) => { dispatch(fetchMovieError(err)); });
}

export const searchMovieID = (param) => (dispatch) => {
  const url = BASE_SEARCH_MOVIEID_URL + param + MOVIE_PLOT_PARAM + API_KEY;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then ((data) => {
      if (data) {
        const movie = { 
          title: data.Title,
          director: data.Director, 
          actors: data.Actors, 
          plot: data.Plot,
          year: data.Year,
          poster: data.Poster,
          rating : data.imdbRating,
        }
        dispatch(fetchMovieInfoSuccess(movie));
      }
    }).catch((err) => { dispatch(fetchMovieInfoError(err)); });
}
