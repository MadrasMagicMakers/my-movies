"use client";
import React from "react";
import Image from "next/image";

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      blurDataURL={src}
    />
  );
};

export default LazyImage;
