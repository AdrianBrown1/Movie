import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import LandingPage from '../containers/landing-page-container/landing-page-container';
import Error from '../screens/error-page/error-page';

export default () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path={'/'} component={LandingPage}/>
        <Route component={Error}/>
      </Switch>
    </Fragment>
  </Router>
)