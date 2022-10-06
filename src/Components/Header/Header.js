import React from 'react'

export default function Header() {
  return (
    <header className="container">
    <div className="heading text-right text-white">
      <i className="fas fa-phone-alt"></i>
      <span className="border-right pr-2">1900 1234</span>
      <i className="fas fa-search"></i>
    </div>

    {/* Navbar */}
    <nav className="navbar navbar-expand-md navbar-dark">
    {/* Brand */}
      <div className="navbar-brand" href="#">
        <p>Mana Movie</p>
      </div>

      {/* Toggler/collapsibe Button */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar links  */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Booking</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  )
}
