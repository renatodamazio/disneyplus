import React, { useEffect } from "react";
import { Nav, NavMenu, NavMenuItem } from "./Header.style";
import Image from "../Images/Image";
import { Link } from "react-router-dom";
import { LoginButton, SignOutButton, Dropdown } from "../Buttons/Button.styles";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  signOutState,
  setUserLoginDetails,
} from "../store/reducers/User/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const menus = [
    {
      title: "HOME",
      url: "/home",
      icon: "home-icon.svg",
    },
    {
      title: "SEARCH",
      url: "#!",
      icon: "search-icon.svg",
    },
    {
      title: "WATCHLIST",
      url: "#!",
      icon: "watchlist-icon.svg",
    },
    {
      title: "ORIGINALS",
      url: "#!",
      icon: "original-icon.svg",
    },
    {
      title: "MOVIES",
      url: "#!",
      icon: "movie-icon.svg",
    },
    {
      title: "SERIES",
      url: "#!",
      icon: "series-icon.svg",
    },
  ];

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    const auth = getAuth();

    if (userName) {
      return signOut(auth)
        .then(() => {
          dispatch(signOutState());
          navigate("/");
        })
        .catch((err) => alert(err));
    }

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
          <LoginButton onClick={handleAuth}>LOGIN</LoginButton>
        </>
      ) : (
        <>
          <NavMenu>
            {menus.map((menu) => (
              <NavMenuItem key={menu.title}>
                <Link to={menu.url}>
                  <Image
                    src={`/images/${menu.icon}`}
                    width="20px"
                    height="20px"
                    alt={menu.title}
                  />
                  <span>{menu.title}</span>
                </Link>
              </NavMenuItem>
            ))}
          </NavMenu>
          <SignOutButton>
            <Image
              src={userPhoto}
              alt={userName}
              width="50px"
              height="50px"
              style={{ borderRadius: "100%", border: "2px solid #f9f9f9" }}
            />
            <Dropdown>
              <span onClick={handleAuth}>Sign out</span>
            </Dropdown>
          </SignOutButton>
        </>
      )}
    </Nav>
  );
};

export default Header;
