import React from "react";
import { Nav, NavMenu, NavMenuItem } from "./Header.style";
import Image from "../Images/Image";
import { LoginButton } from "../Buttons/Button.styles";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../store/reducers/User/userSlice";
const Header = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const userEmail = useSelector(selectUserEmail);

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

  const handleAuth = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((err) => console.log(err));
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        photo: user.photoURL,
        email: user.email,
      })
    );
  };

  return (
    <Nav>
      <Image src="/images/logo.svg" width="80px" alt="Disney+" />
      {!userName ? (
        <>
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

          <LoginButton onClick={handleAuth}>LOGIN</LoginButton>
        </>
      ) : (
        <>
          <Image
            src={userPhoto}
            alt={userName}
            width="50px"
            height="50px"
            style={{ borderRadius: "100%", border: "2px solid #f9f9f9" }}
          />
        </>
      )}
    </Nav>
  );
};

export default Header;
