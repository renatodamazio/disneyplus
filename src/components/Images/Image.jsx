import React from "react";

const Image = ({ src, alt, className, id, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      id={id}
      width={width}
      height={height}
    />
  );
};

export default Image;
