import React from "react";
import { Nav, NavMenu, NavMenuItem } from "./Header.style";
import Image from "../Images/Image";
import { Link } from "react-router-dom";

const Header = () => {
  const menus = [
    {
      title: "HOME",
      url: "/",
      icon: "home-icon.svg",
    },
    {
      title: "SEARCH",
      url: "/",
      icon: "search-icon.svg",
    },
    {
      title: "WATCHLIST",
      url: "/",
      icon: "watchlist-icon.svg",
    },
    {
      title: "ORIGINALS",
      url: "/",
      icon: "original-icon.svg",
    },
    {
      title: "MOVIES",
      url: "/",
      icon: "movie-icon.svg",
    },
    {
      title: "SERIES",
      url: "/",
      icon: "series-icon.svg",
    },
  ];
  return (
    <Nav>
      <Image src="/images/logo.svg" width="80px" alt="Disney+" />

      <NavMenu>
        {menus.map((menu) => (
          <NavMenuItem key={menu.title}>
            <a href={menu.url}>
              <Image
                src={`/images/${menu.icon}`}
                width="20px"
                height="20px"
                alt={menu.title}
              />
              <span>{menu.title}</span>
            </a>
          </NavMenuItem>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Header;
