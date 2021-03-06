import MovieListPage from '../../screens/movie-list-page/movie-list-page';
import { connect } from 'react-redux';
import { fetchMovies, searchMovies, searchMovieID } from '../../actions/actions';
// import { fetchWeather, resetWeatherState } from '../../actions/actions';
// import movies from '../../reducers/movies';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (params) => {
    dispatch(fetchMovies(params));
  },
  searchMovies: (params) => {
    dispatch(searchMovies(params));
  },
  searchMovieID: (params) => {
    dispatch(searchMovieID(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(MovieListPage);