import React from "react";

export const Text = ({ type, children, style }) => {
  return React.createElement(type, { style }, children);
};

export default Text;
