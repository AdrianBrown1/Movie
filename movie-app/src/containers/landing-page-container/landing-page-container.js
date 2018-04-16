import LandingPage from '../../screens/landing-page/landing-page';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/actions';
// import { fetchWeather, resetWeatherState } from '../../actions/actions';
// import movies from '../../reducers/movies';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
};

const mapDispatchToProps = (dispatch) => ({
  // fetchMovies: () => {
  //   dispatch(fetchMovies());
  // },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(LandingPage);