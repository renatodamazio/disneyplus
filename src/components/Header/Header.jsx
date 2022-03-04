import React from "react";
import { Nav } from "./Header.style";
import Image from "../Images/Image";

const Header = () => {
  return (
    <Nav>
      <Image src="/images/logo.svg" width="80px" alt="Disney+" />
    </Nav>
  );
};

export default Header;
