import React from "react";
import { NavigationItem } from "./index";
import "./navigation.scss";
import { Newspaper } from "styled-icons/remix-line/Newspaper";
import { WorkOutline } from "styled-icons/material/WorkOutline";
import { Blog } from "styled-icons/fa-solid/Blog";
import { ContactsBook } from "styled-icons/remix-line/ContactsBook";
import { useHistory } from "react-router-dom";

type VITAE = "VITAE";
type PORTFOLIO = "PORTFOLIO";
type BLOG = "BLOG";
type CONTACT = "CONTACT";
type active = {
  vitae: boolean,
  portfolio: boolean,
  blog: boolean,
  contact: boolean
}

export enum ROUTES {
  VITAE = "/vitae",
  HOME = "/",
  BLOG = "/blog",
  PORTFOLIO = "/portfolio",
  CONTACT = "/contact"
}

const Navigation: React.FC = () => {
  const [active, setActive] = React.useState<active>({blog: false, contact: false, portfolio: false, vitae: false});
  const history = useHistory();
  const handleActiveNavigation = (e: React.MouseEvent<HTMLDivElement>, category: BLOG | VITAE | PORTFOLIO | CONTACT) => {
    e.preventDefault();
    switch (category) {
      case "VITAE": {
        setActive({
          vitae: true,
          portfolio: false,
          blog: false,
          contact: false,
        });
        history.push(ROUTES.VITAE);
        break;
      }
      case "PORTFOLIO": {
        setActive({
          vitae: false,
          portfolio: true,
          blog: false,
          contact: false,
        });
        history.push(ROUTES.PORTFOLIO);
        break;
      }
      case "BLOG": {
        setActive({
          vitae: false,
          portfolio: false,
          blog: true,
          contact: false,
        });
        history.push(ROUTES.BLOG);
        break;
      }
      case "CONTACT": {
        setActive({
          vitae: false,
          portfolio: false,
          blog: false,
          contact: true,
        });
        history.push(ROUTES.CONTACT);
        break;
      }
      default: {
      }
    }
  };

  return (
    <div className="navigation">
      <div className="navigation--group">
        <NavigationItem
          description="blog"
          active={active.blog}
          handleActiveNavigation={(e: React.MouseEvent<HTMLDivElement>) => handleActiveNavigation(e, "BLOG")}>
          <Blog size="48"/>
        </NavigationItem>
        <NavigationItem
          description="portfolio"
          active={active.portfolio}
          handleActiveNavigation={(e: React.MouseEvent<HTMLDivElement>) => handleActiveNavigation(e, "PORTFOLIO")}>
          <WorkOutline size="48"/> </NavigationItem>
      </div>
      <div className="navigation--group">
        <NavigationItem
          description="vitae"
          active={active.vitae}
          handleActiveNavigation={(e: React.MouseEvent<HTMLDivElement>) => handleActiveNavigation(e, "VITAE")}>
          <Newspaper size="48"/>
        </NavigationItem>
        <NavigationItem
          description="contact"
          active={active.contact}
          handleActiveNavigation={(e: React.MouseEvent<HTMLDivElement>) => handleActiveNavigation(e, "CONTACT")}>
          <ContactsBook size="48"/> </NavigationItem>
      </div>
    </div>
  );
};
export { Navigation };
