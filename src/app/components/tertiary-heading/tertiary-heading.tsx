import React from 'react';
import styled from 'styled-components';


type Props = {
  text: string
}

const StyledTertiaryHeading = styled.div`
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: 2rem;
  margin-right: -2rem;
  color: ${props => props.theme.primary.colorTertiaryHeading};
`;

const TertiaryHeading: React.FC<Props> = ({text}) => {
  return (
    <StyledTertiaryHeading>{text}</StyledTertiaryHeading>
  );
};

export default TertiaryHeading;