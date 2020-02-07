import React from 'react';
import image from '../../assets/headshot/daniel_einars-400x500.jpg';
import { PrimaryHeading } from '../../components/main-heading';
import { ProfilePicture } from '../../components/profile-picture';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../../styles/globalStyle';


const StyledContainer = styled.div`
  margin: 2rem 1rem;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr
`;

const RootContainer: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle/>
        <StyledContainer>
          <ProfilePicture imageSrc={image.toString()}/>
          <PrimaryHeading text="dle"/>
        </StyledContainer>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default RootContainer;