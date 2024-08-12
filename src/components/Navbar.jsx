import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar custom-navbar" style={{ backgroundColor: "#05264d" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: "white", fontWeight: "bold" }}>
          We@therNow
        </a>
        <a
          className="navbar-toggler"
          role="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          style={{ border: "none"}}
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </a>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header" style={{ backgroundColor: "#05264d" }}>
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{ color: "white" }}>
              We@therNow
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{ filter: "invert(1)" }}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Search
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Contact
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Login
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
