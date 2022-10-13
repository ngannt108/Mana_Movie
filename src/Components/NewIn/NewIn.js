import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { StoreContext } from "../../Redux/Store/Store";

export default function NewIn() {
  const store = useContext(StoreContext);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  var sliderFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  var sliderNav = {
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    // Coming Soon
    <section id="comingsoon" className="dark">
      <div>
        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          {...sliderFor}
          className="slider-for"
        >
          {store.ShowingMovie.listMovie?.map((movie, index1) => (
            <div key={index1} className="comingsoon__top top-1 pt-5">
              <h1 className="container heading pt-4 pb-4">NOW SHOWING</h1>
              <div className="container comingsoon__content px-0">
                <div className="comingsoon__item" data-slick-index="0">
                  <div className="row">
                    <div className="comingsoon__left col-6 pr-5">
                      <h1>{movie.ApiGenreName}</h1>
                      <h2>{movie.Title}</h2>
                      <div className="date">
                        <i className="fas fa-calendar-week"></i>
                        {movie.OpeningDate}
                      </div>
                      <p className="pr-5 movie-decription">
                        {movie.SynopsisEn}
                      </p>
                      <Link to="#">More info </Link>
                    </div>
                    <div
                      style={{
                        background: `url(${movie.GraphicUrl})`,
                        height: "600px",
                      }}
                      className="comingsoon__right item1 col-6"
                    >
                      <Link
                        to={movie.TrailerUrl}
                        data-vbtype="video"
                        className="venobox"
                      >
                        <i className="fa fa-play"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="container py-4">
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            {...sliderNav}
            className="comingsoon__nav slider-nav"
          >
            {store.ShowingMovie.listMovie?.map((movie, index) => (
              <div key={index} className="cmnav__item" data-slick-index="0">
                <img src={movie.GraphicUrl} alt="" className="mx-auto" />
                <h5 className="mb-2">{movie.Title}</h5>
                <h6>{movie.OpeningDate}</h6>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
