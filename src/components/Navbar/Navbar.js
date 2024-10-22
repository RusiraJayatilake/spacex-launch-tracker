import { useState } from "react";
import "./Navbar.css";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
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

  const handleTofuChange = () => {};

  return (
    <>
      <nav
        className="navbar bg-body-tertiary navbar-expand-lg fixed-top"
        style={{ boxShadow: "0 5px 25px 0 rgba(0, 0, 0, .3)" }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Toggle icons={false} onChange={handleTofuChange} />
          </div>
          <button className="navbar-toggler" type="button">
            <span
              className="navbar-toggler-icon justify-content-end nav-toggler"
              onClick={handleToggleMenu}
            />
          </button>
          <div
            className={`offcanvas offcanvas-end ${isToggled ? "show" : ""}`}
            tabindex="-1"
          >
            <div className="offcanvas-header">
              {/* <h5 className="offcanvas-title">Offcanvas</h5> */}
              <button
                type="button"
                className="btn-close"
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
