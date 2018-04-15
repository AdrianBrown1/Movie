import { 
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  API_KEY,
} from '../constants/action-types';
import { BASE_URL, BASE_SEARCH_URL } from '../constants/movie-urls';
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
