import React from 'react';
import styled from 'styled-components';


type Props = {
  text: string
}

const StyledSecondaryHeading = styled.div`
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: 2rem;
  margin-right: -2rem;
  color: ${props => props.theme.primary.colorSecondaryHeading};
`;

const SecondaryHeading: React.FC<Props> = ({text}) => {
  return (
    <StyledSecondaryHeading>{text}</StyledSecondaryHeading>
  );
};

export default SecondaryHeading;