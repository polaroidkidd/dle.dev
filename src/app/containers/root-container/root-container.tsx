import React from 'react';
import image from '../../assets/headshot/daniel_einars-400x500.jpg';
import { MainHeading } from '../../components/main-heading';
import { ProfilePicture } from '../../components/profile-picture';
import './root-container.scss';


const RootContainer: React.FC = () => {
  return (
      <div className="root-container">
        <ProfilePicture image={image.toString()}/>
        <MainHeading text="dle"/>
      </div>
  );
};

export default RootContainer;
