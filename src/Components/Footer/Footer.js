import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    // Footer
    <footer className="text-center">
      {/* <div className="contact bg-white py-5">
        <p>Need help? Contact our support team on</p>
        <h1>0347 297 306</h1>
      </div> */}
      <div style={{marginTop :"80px"}} className="about dark">
        <div className="about__top container-xl pt-5 pb-3">
          <div className="row">
            <div className="col-md-3 col-12">
              <h2>Get in touch</h2>
              <ul>
                <li>
                  <Link to="#">FAQs</Link>
                </li>
                <li>
                  <Link to="#">Give us feedback</Link>
                </li>
                <li>
                  <Link to="#">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12">
              <h2>About Movie star</h2>
              <ul>
                <li>
                  <Link to="#">About us</Link>
                </li>
                <li>
                  <Link to="#">Find us</Link>
                </li>
                <li>
                  <Link to="#">Schedule</Link>
                </li>
                <li>
                  <Link to="#">News</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12">
              <h2>Legal stuff</h2>
              <ul>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Privacy policy</Link>
                </li>
                <li>
                  <Link to="#">Cookie policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12">
              <h2>Connect with us</h2>
              <ul>
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook-f"></i>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-google-plus-g"></i>
                    Google +
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about__bottom container-xl text-left">
          <p>
            2022 © Movie Star /
            <Link to="#">
              Web design by Mana Team
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
