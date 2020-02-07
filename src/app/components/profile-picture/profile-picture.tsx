import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import './profile-picture.scss';

type Props = {
  imageSrc: string
}

const ProfilePicture: React.FC<Props> = ({imageSrc}) => {
  return (
    <div className="profile-picture profile-picture--container">
      <img src={imageSrc} className="profile-picture--image" alt="Profile Picture"/>
    </div>
  );
};

export default ProfilePicture;



