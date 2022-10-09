import React from "react";

export default function Footer() {
  return (
    // Footer
    <footer className="text-center">
      <div className="contact bg-white py-5">
        <p>Need help? Contact our support team on</p>
        <h1>0330 123 4567</h1>
      </div>
      <div className="about dark">
        <div className="about__top container-xl pt-5 pb-3">
          <div className="row">
            <div className="col-md-3 col-12">
              <h2>Get in touch</h2>
              <ul>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Give us feedback</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12">
              <h2>About Movie star</h2>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Find us</a>
                </li>
                <li>
                  <a href="#">Schedule</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12">
              <h2>Legal stuff</h2>
              <ul>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Cookie policy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12">
              <h2>Connect with us</h2>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g"></i>
                    Google +
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about__bottom container-xl text-left">
          <p>
            2017 © Movie Star /
            <a href="https://www.klevermedia.co.uk/">
              {" "}
              Web design by Klever media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
