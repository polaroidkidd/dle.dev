import React from 'react';
import './welcome-message.scss';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../navigation';

const WelcomeMessage: React.FC = () => {
  return (
    <>
      <section>
        <h2 className="heading-secondary welcome-message">
          Hi! I'm Daniel Einars.
        </h2>
        <h3 className="heading-tertiary u-center-text__horizontal u-center-text__padding">
          I build websites & servers.
        </h3>

        <h4 className="heading-quaternary u-center-text__horizontal">
          Check out my <NavLink to={ROUTES.BLOG}>first blog entry</NavLink> on
          using React with Typescript!
        </h4>
      </section>
    </>
  );
};
export {WelcomeMessage};
