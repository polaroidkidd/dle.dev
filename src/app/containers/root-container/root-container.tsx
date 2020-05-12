import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {Blog, Contact, Home, Portfolio, Vitae} from '@pages';
import {Navigation, ROUTES} from '@components';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

type Props = {
  style: React.CSSProperties;
};

const RootContainer: React.FC<Props> = ({style}) => {
  return (
    <div style={style}>
      <Router history={history}>
        <Navigation />
        <Switch>
          <Route path={ROUTES.PORTFOLIO}>
            <Portfolio />
          </Route>
          <Route path={ROUTES.BLOG}>
            <Blog />
          </Route>
          <Route path={ROUTES.VITAE}>
            <Vitae />
          </Route>
          <Route path={ROUTES.CONTACT}>
            <Contact />
          </Route>
          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export {RootContainer};
