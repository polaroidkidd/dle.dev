import { IconLinkedin } from "@icons/IconLinkedin";
import { IconGithub } from "@icons/IconGithub";
import { IconCircleQuestionWavy } from "@icons/IconCircleQuestionWavy";

export type IProfile = HTMLAnchorElement & {
  network: string;
  username: string;
  url: string;
};

enum PROFILE {
  LinkedIn = "LinkedIn",
  Github = "Github",
  Unknown = "Unknown",
}

export function Profile({ network, url }: Omit<IProfile, "children">) {
  if (url === undefined) {
    return null;
  }

  return (
    <a
      href={url}
      className="transition-all flex flex-col justify-center items-center hover:text-red-600 dark:hover:text-red-300"
    >
      {getIcon(network as PROFILE, 8)}
      {network}
    </a>
  );
}

function getIcon(network: PROFILE, width: number): JSX.Element {
  switch (network) {
    case PROFILE.LinkedIn:
      return (
        <IconLinkedin className={`w-${width}`} aria-label="linkedin link" />
      );
    case PROFILE.Github:
      return <IconGithub className={`w-${width}`} aria-label="github link" />;
    default:
      return <IconCircleQuestionWavy className={`w-${width} `} />;
  }
}
