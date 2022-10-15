import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Redux/Store/Store";
import './Header.css';

export default function Header() {
  const store = useContext(StoreContext);
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName(store.userAccount.account);
  }, [store]);
  return (
    <>
      {/* header */}
      <header style={{paddingTop : '32px'}} id="header__run">
        <div className="container-xl">
          {/* <div className="heading text-right text-white">
            <a
              href="tel:03301234567"
              className="text-white small font-weight-bold"
            >
              <i className="fa fa-phone-alt"></i>
              <span className="pl-1 pr-2"> 0330 123 4567</span>
              <i className="pl-2 fa fa-search"></i>
            </a>
          </div> */}
          {/* navbar */}
          <nav className="navbar navbar-expand-md navbar-dark">
            {/* Brand */}
            <Link className="navbar-brand" to="/">
              <img onClick={() => {}} src="./img/logo.svg" alt="" />
            </Link>

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
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    What's on
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Cinemas">
                    Cinemas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    News
                  </Link>
                </li>
                
                  {userName ? (
                    <li className="nav-item LoggedIn">
                    <div style={{marginTop : '20px'}} className="dropdown ">
                      <Link>{userName.split('@gmail.com')}</Link>
                      <div className="dropdown-content">
                        <Link
                          onClick={() =>
                            store.AccountDispatch({
                              type: "ACCOUNT",
                              payload: null,
                            })
                          }
                          to="/"
                        >
                          LOG OUT
                        </Link>
                      </div>
                    </div>
                    </li>
                  ) : (
                    <li className="nav-link un-login">
                      <Link to="/SignIn">
                      Log in
                    </Link>
                    </li>
                  )}
                
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
