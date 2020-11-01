import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { LoadingIndicator, Navigation, ROUTES } from '@components';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

type Props = {
  style: React.CSSProperties;
};

const BlogPage = React.lazy(() => import(/* webpackChunkName: "blog" */ '../../pages/blog/blog'));
const ContactPage = React.lazy(() => import(/* webpackChunkName: "contact" */ '../../pages/contact/contact'));
const HomePage = React.lazy(() => import(/* webpackChunkName: "home" */ '../../pages/home/home'));
const PortfolioPage = React.lazy(() => import(/* webpackChunkName: "portfolio" */ '../../pages/portfolio/portfolio'));
const VitaePage = React.lazy(() => import(/* webpackChunkName: "vitae" */ '../../pages/vitae/vitae'));

const RootContainer: React.FC<Props> = ({ style }) => {
  return (
    <div style={style}>
      <Router history={history}>
        <Navigation />
        <React.Suspense fallback={<LoadingIndicator />}>
          <Switch>
            <Route path={ROUTES.PORTFOLIO}>
              <PortfolioPage />
            </Route>
            <Route path={ROUTES.BLOG}>
              <BlogPage />
            </Route>
            <Route path={ROUTES.VITAE}>
              <VitaePage />
            </Route>
            <Route path={ROUTES.CONTACT}>
              <ContactPage />
            </Route>
            <Route path={ROUTES.HOME}>
              <HomePage />
            </Route>
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
};
export { RootContainer };
