import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Redux/Store/Store";
import VideoPopUp from "../VideoPopUp/VideoPopUp";
import './Carousel.css'

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
        <li data-target="#demo" data-slide-to="3"></li>
      </ul>
      {/* The slideshow */}
      <div className="carousel-inner">
        {store.ShowingMovie.listMovie && (
          <div
            style={{
              backgroundImage: `url(${store.ShowingMovie.listMovie[0].BannerUrl})`,
            }}
            className={`carousel-item item2 text-white active`}
          >
            <div className="container-xl px-5">
              <div className="row">
                <div className="col-md-9">
                  <h3 className="carousel__h3">
                    {store.ShowingMovie.listMovie[0].ApiGenreName}
                  </h3>
                  <h1 className="carousel__h1">
                    {store.ShowingMovie.listMovie[0].Title}
                  </h1>
                  <p className="carousel__p mb-4 movie-decription">
                    {store.ShowingMovie.listMovie[0].SynopsisEn}
                  </p>
                  <div className="carousel-trailer">
                    <span className="carousel__span">{store.ShowingMovie.listMovie[0].ApiRating}</span>
                    <VideoPopUp link={store.ShowingMovie.listMovie[0].TrailerUrl}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {store.ShowingMovie.listMovie &&
          store.ShowingMovie.listMovie.slice(1, 4).map((movie, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${movie.BannerUrl})` }}
              className={`carousel-item item${index + 1} text-white`}
            >
              <div className="container-xl px-5">
                <div className="row">
                  <div className="col-md-9">
                    <h3 className="carousel__h3">{movie.ApiGenreName}</h3>
                    <h1 className="carousel__h1">{movie.Title}</h1>
                    <p className="carousel__p mb-4 movie-decription">
                      {movie.SynopsisEn}
                    </p>
                    <div className="carousel-trailer">
                      <span className="carousel__span">{movie.ApiRating}</span>
                      {/* <Link
                        className="venobox btn btn-trailer"
                        data-vbtype="video"
                        to={movie.TrailerUrl}
                      >
                        <i className="fa fa-play"></i>
                        <span>Trailer</span>
                      </Link> */}
                      <VideoPopUp link={movie.TrailerUrl}/>
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
