import React from 'react';
import './profile-picture.scss';

interface IOwnProps {
  image: string
}

const ProfilePicture: React.FC<IOwnProps> = (props: IOwnProps) => {
  return (
      <div className="profile-picture profile-picture--container">
        <img src={props.image} className="profile-picture--image" alt="Profile Picture"/>
      </div>
  );
};

export default ProfilePicture;



