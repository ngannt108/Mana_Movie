import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Redux/Store/Store";

export default function Carousel() {
  const store = useContext(StoreContext);
  return (
    // Carousel
    <div id="demo" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
      {/* The slideshow */}
      <div className="carousel-inner">
        {store.ShowingMovie.listMovie &&
          store.ShowingMovie.listMovie.slice(0, 4).map((movie, index) => (
            <div key={index} className="carousel-item item1 text-white active">
              <div className="container-xl px-5">
                <div className="row">
                  <div className="col-md-9">
                    <h3 className="carousel__h3">{movie.ApiGenreName}</h3>
                    <h1 className="carousel__h1">{movie.Title}</h1>
                    <p className="carousel__p mb-4 movie-decription">
                      {movie.SynopsisEn}
                    </p>
                    <div>
                      <span className="carousel__span">PG</span>
                      <Link
                        className="venobox btn btn-trailer"
                        data-vbtype="video"
                        to={movie.TrailerUrl}
                      >
                        <i className="fa fa-play"></i>
                        <span>Play Trailer</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="carousel__icon">
        <img className="carousel__arrow" src="./img/scroll-arrow.svg" alt="" />
      </div>
    </div>
  );
}
