import Image from "next/image";
import type { StaticImageData } from "next/image";

type RemoteImageProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function RemoteImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "100vw",
}: RemoteImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
