import React from 'react';


interface IOwnProps {
  text: string
}

const MainHeading: React.FC<IOwnProps> = (props: IOwnProps) => {
  return (
      <div className="heading-primary">{props.text}</div>
  );
};

export default MainHeading;