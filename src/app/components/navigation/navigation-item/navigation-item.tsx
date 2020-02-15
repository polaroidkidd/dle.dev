import React from "react";
import { HeadingTertiary } from "../../index";
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
      <HeadingTertiary text={description}/>
    </div>
  );
};
export default NavigationItem;