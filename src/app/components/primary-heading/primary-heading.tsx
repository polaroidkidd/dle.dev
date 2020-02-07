import React from 'react';
import styled from 'styled-components';


const StyledMainHeading = styled.div`
  font-size: 5rem;
  font-family: Poppins, sans-serif;
  font-weight: 100;
  color: ${props => props.theme.primary.colorPrimaryBorder};
`;


type Props = {
  text: string
}


const PrimaryHeading: React.FC<Props> = ({text}) => {
  return (
    <StyledMainHeading>{text}</StyledMainHeading>
  );
};

export default PrimaryHeading;