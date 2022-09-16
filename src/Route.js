import React from 'react';
import { Switch, HashRouter } from 'react-router-dom';
import {ProtectedRoute} from './services/ProtectedRoute';
import ScrollToTop from './utils/ScrollToTop';
import Home from './pages/home';

const Routes = () => {
  return (
      <HashRouter>
        <ScrollToTop>
          <Switch>
            <ProtectedRoute exact path='/'>
              <Home />
            </ProtectedRoute>
          </Switch>
        </ScrollToTop>
      </HashRouter>
  );
};
export default Routes;
