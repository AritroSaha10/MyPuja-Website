import React from "react";

export default function ImgWithFallback({
  src,
  fallback,
  type = "image/webp",
  classPassthrough,
  ...delegated
}) {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img className={classPassthrough} src={fallback} {...delegated} />
    </picture>
  );
}
