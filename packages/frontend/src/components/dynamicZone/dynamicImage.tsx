import type { HTMLAttributes } from "react";
import type { ImageFragment } from "@types";
import Image from "next/image";

interface IDynamicImageProps {
  nextImageWidth?: number;
}

export function DynamicImage(
  props: ImageFragment & IDynamicImageProps & HTMLAttributes<HTMLImageElement>,
): JSX.Element {
  const actualWidth = props.image.data?.attributes?.width ?? 0;
  const actualHeight = props.image.data?.attributes?.height ?? 0;
  const ratio = (props.nextImageWidth ?? actualWidth) / actualWidth;

  const alt = props.image.data?.attributes?.alternativeText ?? "false";
  return (
    <Image
      alt={alt}
      src={`http://localhost:1337${props.image.data?.attributes?.url}`}
      width={actualWidth * ratio}
      height={actualHeight * ratio}
      className={props.className}
    />
  );
}
