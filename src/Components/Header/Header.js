import React from "react";

export default function Header() {
  return (
    <>
      {/* header */}
      <header id="header__run">
        <div className="container-xl">
          <div className="heading text-right text-white">
            <a
              href="tel:03301234567"
              className="text-white small font-weight-bold"
            >
              <i className="fa fa-phone-alt"></i>
              <span className="pl-1 pr-2"> 0330 123 4567</span>
              <i className="pl-2 fa fa-search"></i>
            </a>
          </div>
          {/* navbar */}
          <nav className="navbar navbar-expand-md navbar-dark">
            {/* Brand */}
            <a className="navbar-brand" href="#">
              <img src="./img/logo.svg" alt="" />
            </a>

            {/* Toggler/collapsibe Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto text-nowrap">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    What's on
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shortcodes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
