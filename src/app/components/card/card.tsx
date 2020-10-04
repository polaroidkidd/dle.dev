import React from 'react';
import './card.scss';

type Props = {
  title: string;
  published: string;
}

const Card: React.FC<Props> = (props) => {

  return (
    <>
      <h2 className="heading-tertiary card__title">{props.title}</h2>
      <h2 className="heading-quaternary card__published">{props.published}</h2>
      {props.children}
    </>
  );
};
export default Card;



