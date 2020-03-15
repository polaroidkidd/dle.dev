import React from "react";
import "./navigation-item.scss";
import classNames from "classnames";

type Props = {
  description: "vitae" | "portfolio" | "blog" | "contact",
  active: boolean,
  handleActiveNavigation: (e: React.MouseEvent<HTMLDivElement>) => void,
}

const NavigationItem: React.FC<Props> = ({description, active, handleActiveNavigation, children}) => {
  return (
    <div
      className={classNames("nav-item-container", active ? "nav-item-container__active" : "")}
      onClick={handleActiveNavigation}>
      <div className="nav-item-container--icon">
        {children}
      </div>
      <h3 className="heading-tertiary">{description}</h3>
    </div>
  );
};
export { NavigationItem };