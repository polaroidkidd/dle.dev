import React from 'react';
import './navigation-item.scss';

type Props = {
  description: 'vitae' | 'portfolio' | 'blog' | 'contact';
  isActive: boolean;
  handleActiveNavigation: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const NavigationItem: React.FC<Props> = ({ description, isActive, handleActiveNavigation, children }) => {
  return (
    <div className={`nav-item-container ${isActive && 'nav-item-container__active'}`} onClick={handleActiveNavigation}>
      <div className="nav-item-container--icon">{children}</div>
      <h3 className="heading-tertiary">{description}</h3>
    </div>
  );
};
export { NavigationItem };
