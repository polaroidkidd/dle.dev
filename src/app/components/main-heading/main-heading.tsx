import React from 'react';


type Props = {
  text: string
}


const MainHeading: React.FC<Props> = ({text}) => {
  return (
    <div className="heading-primary">{text}</div>
  );
};

export default MainHeading;