import React from "react";
import Image, { ImageProps } from "next/image";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, width, height }) => {
  const layout = width && height ? "fixed" : "fill";

  return (
    <Image
      src={src}
      alt={alt}
      layout={layout as any}
      objectFit="cover"
      placeholder="blur"
      blurDataURL={src}
      width={width as any}
      height={height as any}
    />
  );
};

export default LazyImage;
