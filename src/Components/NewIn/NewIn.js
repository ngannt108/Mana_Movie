import React from "react";
import Slider from "react-slick";

export default function NewIn() {
  var setting = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    // NEW IN
    <section id="newin" className="container">
      <h6 className="title__heading">New in</h6>
      <div className="newin__content pt-4">
        <Slider {...setting} className="text-center">
          <div className="col-md-9">
            <div className="newin__item">
              <img className="img-fluid" src="./img/movie-1.jpg" alt="" />
              <div className="newin__layout d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <a
                    href="https://youtu.be/d96cjJhvlMA"
                    data-vbtype="video"
                    className="venobox play vbox-item"
                    tabIndex="0"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <br />
                  <a href="#" className="read-more" tabIndex="0">
                    read more
                  </a>
                  <span className="date">Released: 7 Mar, 2017</span>
                </div>
              </div>
            </div>
            <h1>The last post</h1>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="col-md-9">
            <div className="newin__item">
              <img className="img-fluid" src="./img/movie-2.jpg" alt="" />
              <div className="newin__layout d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <a
                    href="https://youtu.be/d96cjJhvlMA"
                    data-vbtype="video"
                    className="venobox play vbox-item"
                    tabIndex="0"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <br />
                  <a href="#" className="read-more" tabIndex="0">
                    read more
                  </a>
                  <span className="date">Released: 7 Mar, 2017</span>
                </div>
              </div>
            </div>
            <h1>Dark and lonely</h1>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star grey"></i>
            </div>
          </div>
          <div className="col-md-9">
            <div className="newin__item">
              <img className="img-fluid" src="./img/movie-3.jpg" alt="" />
              <div className="newin__layout d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <a
                    href="https://youtu.be/d96cjJhvlMA"
                    data-vbtype="video"
                    className="venobox play vbox-item"
                    tabIndex="0"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <br />
                  <a href="#" className="read-more" tabIndex="0">
                    read more
                  </a>
                  <span className="date">Released: 7 Mar, 2017</span>
                </div>
              </div>
            </div>
            <h1>Venture</h1>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="col-md-9">
            <div className="newin__item">
              <img className="img-fluid" src="./img/movie-4.jpg" alt="" />
              <div className="newin__layout d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <a
                    href="https://youtu.be/d96cjJhvlMA"
                    data-vbtype="video"
                    className="venobox play vbox-item"
                    tabIndex="0"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <br />
                  <a href="#" className="read-more" tabIndex="0">
                    read more
                  </a>
                  <span className="date">Released: 7 Mar, 2017</span>
                </div>
              </div>
            </div>
            <h1>Hush</h1>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star grey"></i>
              <i className="fa fa-star grey"></i>
            </div>
          </div>
          <div className="col-md-9">
            <div className="newin__item">
              <img className="img-fluid" src="./img/movie-1.jpg" alt="" />
              <div className="newin__layout d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <a
                    href="https://youtu.be/d96cjJhvlMA"
                    data-vbtype="video"
                    className="venobox play vbox-item"
                    tabIndex="0"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <br />
                  <a href="#" className="read-more" tabIndex="0">
                    read more
                  </a>
                  <span className="date">Released: 7 Mar, 2017</span>
                </div>
              </div>
            </div>
            <h1>The last post</h1>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="col-md-9">
            <div className="newin__item">
              <img className="img-fluid" src="./img/movie-2.jpg" alt="" />
              <div className="newin__layout d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <a
                    href="https://youtu.be/d96cjJhvlMA"
                    data-vbtype="video"
                    className="venobox play vbox-item"
                    tabIndex="0"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <br />
                  <a href="#" className="read-more" tabIndex="0">
                    read more
                  </a>
                  <span className="date">Released: 7 Mar, 2017</span>
                </div>
              </div>
            </div>
            <h1>Dark and lonely</h1>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star grey"></i>
            </div>
          </div>
          <div className="col-md-9">
            <div className="newin__item">
              <img className="img-fluid" src="./img/movie-3.jpg" alt="" />
              <div className="newin__layout d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <a
                    href="https://youtu.be/d96cjJhvlMA"
                    data-vbtype="video"
                    className="venobox play vbox-item"
                    tabIndex="0"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <br />
                  <a href="#" className="read-more" tabIndex="0">
                    read more
                  </a>
                  <span className="date">Released: 7 Mar, 2017</span>
                </div>
              </div>
            </div>
            <h1>Venture</h1>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="col-md-9">
            <div className="newin__item">
              <img className="img-fluid" src="./img/movie-4.jpg" alt="" />
              <div className="newin__layout d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <a
                    href="https://youtu.be/d96cjJhvlMA"
                    data-vbtype="video"
                    className="venobox play vbox-item"
                    tabIndex="0"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <br />
                  <a href="#" className="read-more" tabIndex="0">
                    read more
                  </a>
                  <span className="date">Released: 7 Mar, 2017</span>
                </div>
              </div>
            </div>
            <h1>Hush</h1>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star grey"></i>
              <i className="fa fa-star grey"></i>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
