import React from "react";

const Image = ({ src, alt, className, id, width, height, style }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      id={id}
      width={width}
      height={height}
    />
  );
};

export default Image;
