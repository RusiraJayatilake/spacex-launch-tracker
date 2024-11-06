import { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useTheme } from "../../utils/context/ThemeProvider";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { toggleTheme, theme } = useTheme();

  const navbarData = [
    { title: "Launches", link: "/" },
    { title: "History", link: "/history" },
  ];

  const handleToggleMenu = () => {
    setIsToggled(!isToggled);
  };

  const handleToggleMenuClose = () => {
    setIsToggled(false);
  };

  return (
    <>
      <nav
        className="navbar bg-body-tertiary navbar-expand-lg fixed-top"
        style={{ boxShadow: "0 5px 25px 0 rgba(0, 0, 0, .3)" }}
      >
        <div className="container">
          <div className="navbar-brand d-flex align-items-center">
            <Toggle
              icons={false}
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
          </div>
          {/* Toggle Menu */}
          <div className="navbar-toggler">
            <FiMenu
              className="justify-content-end nav-toggler"
              style={{ fontSize: "25px" }}
              onClick={handleToggleMenu}
            />
          </div>

          <div
            className={`offcanvas offcanvas-end ${isToggled ? "show" : ""}`}
            tabIndex="-1"
          >
            <div className="offcanvas-header justify-content-end">
              <FiX
                style={{ fontSize: "25px" }}
                onClick={handleToggleMenuClose}
              />
            </div>
            <div className="offcanvas-body gap-3">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                {navbarData.map((value, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link" href={value.link}>
                      {value.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
