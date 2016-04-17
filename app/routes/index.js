import React from 'react';
import { Router, Route } from 'react-router';

import App from '../containers/App/';

export default function configureRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  );
}
