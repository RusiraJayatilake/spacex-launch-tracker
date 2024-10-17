import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const navbarData = [
    { title: "History", link: "#" },
    { title: "Title 2", link: "#" },
    { title: "Title 3", link: "#" },
    { title: "Title 4", link: "#" },
  ];

  const handleToggleMenu = () => {
    setIsToggled(!isToggled);
  };

  const handleToggleMenuClose = () => {
    setIsToggled(false);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary navbar-expand-lg fixed-top">
        <div className="container">
          {/* <a className="navbar-brand" href="#">
            Offcanvas navbar
          </a> */}
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
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 gap-3">
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
