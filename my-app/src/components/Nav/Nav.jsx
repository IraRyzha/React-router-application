import { useRef, useEffect, useState } from "react";
import logo from "./logo.svg";
import menuBtn from "./icon-hamburger.svg";
import closeBtn from "./icon-close.svg";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  const navNode = useRef();
  const [isMenu, setIsMenu] = useState(false);

  const navItems = [
    { name: "home", url: "/" },
    { name: "shop", url: "shop" },
    { name: "about", url: "about" },
    { name: "contact", url: "contact" },
  ];

  useEffect(() => {
    if (navNode.current) {
      isMenu
        ? navNode.current.classList.add("modal")
        : navNode.current.classList.remove("modal");
    }
  }, [isMenu]);

  const changeMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <>
      {isMenu && <div className="nav-modal"></div>}
      <nav ref={navNode}>
        {isMenu && (
          <img
            src={closeBtn}
            alt="close btn"
            className="close-btn"
            onClick={changeMenu}
          />
        )}
        {!isMenu && (
          <img
            src={menuBtn}
            alt="menu button"
            className="menu-btn"
            onClick={changeMenu}
          />
        )}
        {!isMenu && <img src={logo} alt="logo" className="logo" />}
        <ul className="nav-list">
          {navItems.map(({ name, url }) => (
            <li key={name}>
              <NavLink to={url}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
