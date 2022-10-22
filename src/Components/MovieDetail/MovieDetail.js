import React, { useContext, useEffect, useState } from "react";
import "./MovieDetail.css";
import { StoreContext } from "../../Redux/Store/Store";
import { useParams } from "react-router-dom";
import { API_MOVIE } from "../../Common/ApiController";
import MovieDetailCinemas from "../MovieDetailCinemas/MovieDetailCinemas";

export default function MovieDetail() {
  const store = useContext(StoreContext);
  const { ApiFilmId } = useParams();

  //Biến ngày giờ hiện tại
  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const [currentDate, setCurentDate] = useState(null);

  useEffect(() => {
    if (ApiFilmId) {
      fetch(`${API_MOVIE.DETAIL + ApiFilmId}`)
        .then((res) => res.json())
        .then((dt) => {
          store.MovieDetailDispatch({
            type: "DETAIL",
            payload: dt[0],
          });
        });
      fetch(`${API_MOVIE.COMMENT + ApiFilmId}`)
        .then((res) => res.json())
        .then((dt) => {
          store.CommentDispatch({
            type: "COMMENT",
            payload: dt[0].Comment[0].Items,
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ApiFilmId]);

  useEffect(() => {
    if (ApiFilmId) {
      setCurentDate(date);
      fetch(`${API_MOVIE.SCHEDULE + ApiFilmId}&date=${currentDate}`)
        .then((res) => res.json())
        .then((dt) => {
          store.ShowtimeDispatch({
            type: "SCHEDULE",
            payload: dt,
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ApiFilmId, currentDate]);
  return (
    <>
      {store.MovieDetail.detail && (
        <div className="movie-detail-container">
          <div className="movie-banner">
            <img
              alt=""
              width={"100%"}
              src={store.MovieDetail.detail.BannerUrl}
            />
          </div>
          <div className="movie-detail-main-content">
            <div className="movie-detail-all-info">
              <div className="left-banner">
                <img
                  width={"250"}
                  alt=""
                  src={store.MovieDetail.detail.GraphicUrl}
                />
              </div>
              <div>
                <div className="base-info">
                  <div className="movie-name">
                    <h1>{store.MovieDetail.detail.Title}</h1>
                  </div>
                  <p className="movie-duaration">
                    {store.MovieDetail.detail.Duration} minutes
                  </p>
                  <div className="movie-row">
                    <p className="movie-label">English title:</p>
                    <p className="label-info">
                      {store.MovieDetail.detail.TitleEn}
                    </p>
                  </div>
                  <div className="movie-row">
                    <p className="movie-label">Country:</p>
                    <p className="label-info">
                      {store.MovieDetail.detail.Countries[0].Name}
                    </p>
                  </div>
                  <div className="movie-row">
                    <p className="movie-label">Genre:</p>
                    <p className="label-info">
                      {store.MovieDetail.detail.ApiGenreName}
                    </p>
                  </div>
                  <div className="movie-row">
                    <p className="movie-label">Release:</p>
                    <p className="label-info">
                      {store.MovieDetail.detail.OpeningDate.slice(0, 10)}
                    </p>
                  </div>
                </div>
                <div className="movie-synopsis">
                  <h1 className="synopsis-header">Description</h1>
                  <div className="synopsis-content">
                    {store.MovieDetail.detail.SynopsisEn}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-showtime">
            <h1 className="movie-showtime-header">Showtime</h1>
            <section className="container container-mdc">
              <div className="row showtime-fields">
                <MovieDetailCinemas
                  setDate={setCurentDate}
                  date={currentDate}
                  banner={store.MovieDetail.detail.GraphicUrl}
                  title={store.MovieDetail.detail.Title}
                />
              </div>
            </section>
          </div>
          {store.Comment.comment && (
            <div className="movie-comment">
              <h1 className="movie-comment-header">Comments</h1>
              <div className="movie-comment-field">
                {store.Comment.comment.map((cmt, index) => (
                  <div key={index} className="user-comment-wrapper">
                    {cmt.Avatar ? (
                      <img
                        className="user-avatar"
                        width={60}
                        height={60}
                        alt=""
                        src={cmt.Avatar}
                      />
                    ) : (
                      <img
                        className="user-avatar"
                        width={60}
                        height={60}
                        alt=""
                        src="http://1.gravatar.com/avatar/1ff5f62ac7b7738ee62ea162c06b550e?s=104&d=mm&r=g&fbclid=IwAR3USKhaAsLHI_CtOSjG6izRJH4xyjjhjPE1hEWiMm14mjr8fMTj8xwiAvE"
                      />
                    )}
                    <div className="user-comment">
                      <div className="user-name">{cmt.ShowName}</div>
                      <div className="comment-day">{cmt.CreatedAt}</div>
                      <div className="comment-content">{cmt.Comment}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
