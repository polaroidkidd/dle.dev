import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { LoadingIndicator, Navigation, ROUTES } from '@components';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

type Props = {
  style: React.CSSProperties;
};

const BlogPage = React.lazy(() => import('../../pages/blog/blog'));
const ContactPage = React.lazy(() => import('../../pages/contact/contact'));
const HomePage = React.lazy(() => import('../../pages/home/home'));
const PortfolioPage = React.lazy(() => import('../../pages/portfolio/portfolio'));
const VitaePage = React.lazy(() => import('../../pages/vitae/vitae'));

const RootContainer: React.FC<Props> = ({ style }) => {
  return (
    <div style={style}>
      <Router history={history}>
        <Navigation />
        <Switch>
          <Route path={ROUTES.PORTFOLIO}>
            <React.Suspense fallback={<LoadingIndicator />}>
              <PortfolioPage />
            </React.Suspense>
          </Route>
          <Route path={ROUTES.BLOG}>
            <React.Suspense fallback={<LoadingIndicator />}>
              <BlogPage />
            </React.Suspense>
          </Route>
          <Route path={ROUTES.VITAE}>
            <React.Suspense fallback={<LoadingIndicator />}>
              <VitaePage />
            </React.Suspense>
          </Route>
          <Route path={ROUTES.CONTACT}>
            <React.Suspense fallback={<LoadingIndicator />}>
              <ContactPage />
            </React.Suspense>
          </Route>
          <Route path={ROUTES.HOME}>
            <React.Suspense fallback={<LoadingIndicator />}>
              <HomePage />
            </React.Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export { RootContainer };
