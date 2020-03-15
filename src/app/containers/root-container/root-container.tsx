import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Blog, Contact, Home, Portfolio, Vitae } from "../../pages";
import CSS from "csstype";
import { Navigation, ProfilePicture, ROUTES } from "../../components";
import { createBrowserHistory } from "history";
import image from "../../assets/images/headshot/daniel_einars-400x500.jpg";

const history = createBrowserHistory();

type Props = {
  style: CSS.Properties
}

const RootContainer: React.FC<Props> = ({style}) => {
  return (
    <div style={style}>
      <Router history={history}>
        <ProfilePicture
          imageSrc={image}
          isLarge={true}/>
        <h1 className="heading-primary center-text__horizontal">dle</h1>
        <Navigation/>
        <Switch>
          <Route path={ROUTES.PORTFOLIO}>
            <Portfolio/>
          </Route>
          <Route path={ROUTES.BLOG}>
            <Blog/>
          </Route>
          <Route path={ROUTES.VITAE}>
            <Vitae/>
          </Route>
          <Route path={ROUTES.CONTACT}>
            <Contact/>
          </Route>
          <Route path={ROUTES.HOME}>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export { RootContainer };
