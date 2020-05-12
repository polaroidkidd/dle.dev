import React from "react";
import { NavigationItem } from "./index";
import "./navigation.scss";
import { Newspaper } from "@styled-icons/remix-line/Newspaper";
import { WorkOutline } from "@styled-icons/material/WorkOutline";
import { Blog } from "@styled-icons/fa-solid/Blog";
import { ContactsBook } from "@styled-icons/remix-fill/ContactsBook";
import { useHistory } from "react-router-dom";
import { ProfilePicture } from "../profile-picture";
import image from "../../assets/images/headshot/daniel_einars-400x500.jpg";

type VITAE = "VITAE";
type PORTFOLIO = "PORTFOLIO";
type BLOG = "BLOG";
type CONTACT = "CONTACT";
type HOME = "HOME";
type active = {
  home: boolean;
  vitae: boolean;
  portfolio: boolean;
  blog: boolean;
  contact: boolean;
};

export enum ROUTES {
  VITAE = "/vitae",
  HOME = "/",
  BLOG = "/blog",
  PORTFOLIO = "/portfolio",
  CONTACT = "/contact",
}

const Navigation: React.FC = () => {
  const [isActive, setActive] = React.useState<active>({
    home: true,
    blog: false,
    contact: false,
    portfolio: false,
    vitae: false,
  });
  const history = useHistory();
  const handleActiveNavigation = (
    e: React.MouseEvent<HTMLDivElement>,
    category: HOME | BLOG | VITAE | PORTFOLIO | CONTACT
  ) => {
    e.preventDefault();
    switch (category) {
      case "HOME": {
        setActive({
          home: true,
          vitae: false,
          portfolio: false,
          blog: false,
          contact: false,
        });
        history.push(ROUTES.HOME);
        break;
      }
      case "VITAE": {
        setActive({
          home: false,
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
          home: false,
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
          home: false,
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
          home: false,
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
    <>
      <ProfilePicture
        imageSrc={image}
        handleActiveNavigation={(e: React.MouseEvent<HTMLDivElement>) =>
          handleActiveNavigation(e, "HOME")
        }
      />
      <div className="navigation">
        <div className="navigation--group">
          <NavigationItem
            description="blog"
            isActive={isActive.blog}
            handleActiveNavigation={(e: React.MouseEvent<HTMLDivElement>) =>
              handleActiveNavigation(e, "BLOG")
            }
          >
            <Blog size="48" />
          </NavigationItem>
          <NavigationItem
            description="portfolio"
            isActive={isActive.portfolio}
            handleActiveNavigation={(e: React.MouseEvent<HTMLDivElement>) =>
              handleActiveNavigation(e, "PORTFOLIO")
            }
          >
            <WorkOutline size="48" />{" "}
          </NavigationItem>
        </div>
        <div className="navigation--group">
          <NavigationItem
            description="vitae"
            isActive={isActive.vitae}
            handleActiveNavigation={(e: React.MouseEvent<HTMLDivElement>) =>
              handleActiveNavigation(e, "VITAE")
            }
          >
            <Newspaper size="48" />
          </NavigationItem>
          <NavigationItem
            description="contact"
            isActive={isActive.contact}
            handleActiveNavigation={(e: React.MouseEvent<HTMLDivElement>) =>
              handleActiveNavigation(e, "CONTACT")
            }
          >
            <ContactsBook size="48" />{" "}
          </NavigationItem>
        </div>
      </div>
    </>
  );
};
export { Navigation };
