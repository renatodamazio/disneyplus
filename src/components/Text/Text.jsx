import React from "react";

export const Text = ({ type, children }) => {
  return React.createElement(type, {  }, children);
};

export default Text;
