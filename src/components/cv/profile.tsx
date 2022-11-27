import GithubIcon from "@public/icons/github.svg";
import LinkedIn from "@public/icons/linkedin.svg";
import Unknown from "@public/icons/circle-wavy-question.svg";
export interface IProfile {
  network: string;
  username: string;
  url: string;
}

enum PROFILE {
  LinkedIn = "LinkedIn",
  Github = "Github",
  Unknown = "Unknown",
}

export function Profile({ network, url, username }: IProfile) {
  return (
    <>
      {getIcon(network as PROFILE)}
      <div>network: {network}</div>
      <div>username: {username}</div>
      <div>url: {url}</div>
    </>
  );
}

function getIcon(network: PROFILE): JSX.Element {
  switch (network) {
    case PROFILE.LinkedIn:
      return <LinkedIn />;
    case PROFILE.Github:
      return <GithubIcon />;
    default:
      return <Unknown />;
  }
}
