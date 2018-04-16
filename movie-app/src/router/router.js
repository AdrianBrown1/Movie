import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import LandingPage from '../containers/landing-page-container/landing-page-container';
import MovieListPage from '../containers/movie-list-page-container/movie-list-page-container';
import MovieInfoPage from '../containers/movie-info-container/movie-info-container';
import Error from '../screens/error-page/error-page';

export default () => (
  <Router>
    <Fragment>
      <Switch>
        <Route  path='/' exact component={LandingPage}/>
        <Route  path='/movie-list'  component={MovieListPage}/>
        <Route  path='/movie-info'  component={MovieInfoPage}/>
        <Route component={Error}/>
      </Switch>
    </Fragment>
  </Router>
)