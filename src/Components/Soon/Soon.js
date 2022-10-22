import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { StoreContext } from "../../Redux/Store/Store";
import "./Soon.css";

export default function Soon() {
  const store = useContext(StoreContext);
  var setting = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
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
      <h6 className="title__heading">COMING SOON</h6>
      <div className="newin__content pt-4">
        <Slider {...setting} className="text-center">
          {store.ComingMovie.listMovie?.map((movie, index) => (
            <div key={index} className="soon-width">
              <div className="col-md-9">
                <div className="newin__item">
                  <img className="img-fluid" src={movie.GraphicUrl} alt="" />
                  <div className="newin__layout d-flex justify-content-center align-items-center">
                    <div className="text-center text-white">
                      {/* <Link
                      to={movie.TrailerUrl}
                      data-vbtype="video"
                      className="venobox play vbox-item"
                      tabIndex="0"
                    >
                      <i className="fa fa-play"></i>
                    </Link> */}
                      <br />
                      <Link
                        to={"/Movie/" + movie.ApiFilmId}
                        className="read-more"
                        tabIndex="0"
                      >
                        Read more
                      </Link>
                      <span className="date">
                        Released: {movie.OpeningDate.slice(0, 10)}
                      </span>
                    </div>
                  </div>
                </div>
                <h1 className="movie-name">{movie.Title}</h1>
                <div className="movie-detail">
                  <div className="movie-rating">{movie.ApiRating}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}