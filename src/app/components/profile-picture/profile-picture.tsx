import React from 'react';
import styled from 'styled-components';


const StyledProfilePicture = styled.img`
  clip-path: circle(12rem at 50% 50%);
  width: 25rem;
  margin-top: 2rem;
`;


const StyledProfilePictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: circle(12.2rem at 50% 50%);
  width: 26rem;
  background-color: $color-primary-border;
  padding-bottom: 2rem;

`;


type Props = {
  imageSrc: string
}

const ProfilePicture: React.FC<Props> = ({imageSrc}) => {
  return (
    <StyledProfilePictureContainer>
      <StyledProfilePicture src={imageSrc} alt="Profile Picture"/>
    </StyledProfilePictureContainer>
  );
};

export default ProfilePicture;



