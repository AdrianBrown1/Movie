import MovieInfo from '../../screens/movie-info-page/movie-info';
import { connect } from 'react-redux';
import { fetchMovies, searchMovies } from '../../actions/actions';
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(MovieInfo);