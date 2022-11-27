import type { ILocation } from "@components/cv/location";
import { Location } from "@components/cv/location";
import type { IProfile } from "@components/cv/profile";
import { Profile } from "@components/cv/profile";
import avatar from "@public/images/daniel_einars-400x500.3aa2364c.jpg";
import classNames from "classnames";
import Image from "next/image";

export interface IBasics {
  name?: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  location: ILocation;
  profiles?: IProfile[];
}

export function Basics({
  label,
  profiles,
  location: { address, countryCode, region },
  name,
}: IBasics) {
  return (
    <div
      className={classNames(
        "relative border rounded border-red-300",
        "mb-2 p-2",
      )}
    >
      <div
        className={classNames(
          "absolute",
          "top-0",
          "md:right-0",
          "sm:left-1/2",
          "-translate-x-1/2",
          "md:translate-x-0",
        )}
      >
        <div
          className={classNames(
            "relative",
            "rounded-full",
            "overflow-clip",
            "w-32",
            "h-32",
            "border-red-300",
            "border",
            "m-4",
          )}
        >
          <Image
            src={avatar}
            alt="avatar"
            className={classNames("absolute", "-top-4")}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div>{name}</div>
      <div> {label}</div>

      <div>
        <h4>Profiles:</h4>
        {profiles?.map((profile) => (
          <Profile key={profile.url} {...profile} />
        ))}
      </div>

      <div>
        <Location address={address} countryCode={countryCode} region={region} />
      </div>
    </div>
  );
}
