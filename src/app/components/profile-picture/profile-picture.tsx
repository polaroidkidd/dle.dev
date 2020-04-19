import React from "react";
import "./profile-picture.scss";
import { useHistory } from "react-router-dom";

type Props = {
  imageSrc: string

  handleActiveNavigation: (e: React.MouseEvent<HTMLDivElement>) => void,
}

const ProfilePicture: React.FC<Props> = ({imageSrc, handleActiveNavigation}) => {
  const history = useHistory();
  const [location, setLocation] = React.useState<string>(history.location.pathname)
  const [isActive, setIsActive] = React.useState<boolean>(location === "/")

  React.useEffect(() => {
    setLocation(history.location.pathname)
  })

  React.useEffect(() => {
    if (location === "/") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }

  }, [location])

  console.log("location: ", location)
  return (
    <div className={`profile-picture-container ${isActive && "profile-picture-container__active"}`}>
      <div className={`profile-picture-container--border  ${isActive && "profile-picture-container--border__active"}`}>
        <img
          className={`profile-picture-container--image ${isActive && "profile-picture-container--image__active"}`}
          // className="profile-picture-container--image"
          src={imageSrc}
          alt="Profile Picture"
          onClick={handleActiveNavigation}
        />
      </div>
    </div>
  );
};
export default ProfilePicture;



