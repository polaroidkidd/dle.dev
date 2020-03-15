import React from "react";
import "./profile-picture.scss";

type Props = {
  imageSrc: string
  isLarge: boolean
}

const ProfilePicture: React.FC<Props> = ({imageSrc, isLarge}) => {
  React.useEffect(() => {
    setTimeout(() => {
    }, 650);
  }, [isLarge]);

  return (
    <div className="profile-picture-container">
      <img
        className="profile-picture"
        src={imageSrc}
        alt="Profile Picture"/>
    </div>
  );
};
export default ProfilePicture;



