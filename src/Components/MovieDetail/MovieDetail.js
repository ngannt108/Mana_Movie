import React, { useContext, useEffect } from "react";
import "./MovieDetail.css";
import { StoreContext } from "../../Redux/Store/Store";
import { useParams } from "react-router-dom";
import { API_MOVIE } from "../../Common/ApiController";

export default function MovieDetail() {
  const store = useContext(StoreContext);
  const { ApiFilmId } = useParams();
  useEffect(() => {
    if (ApiFilmId) {
      fetch(`${API_MOVIE.DETAIL + ApiFilmId}`)
        .then((res) => res.json())
        .then((dt) => {
          store.MovieDetailDispatch({
            type: "DETAIL",
            payload: dt[0],
          });
          // console.log(dt[0]);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ApiFilmId]);
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
                      {store.MovieDetail.detail.OpeningDate}
                    </p>
                  </div>
                  {/* <div className="movie-row">
                    <p className="movie-label">Language:</p>
                    <p className="label-info">English</p>
                  </div> */}
                </div>
                <div className="movie-synopsis">
                  <h1 className="synopsis-header">Synopsis</h1>
                  <div className="synopsis-content">
                    {store.MovieDetail.detail.SynopsisEn}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-showtime">
            <h1 className="movie-showtime-header">Showtime</h1>
            <div className="movie-dateTime-wrapper">
              <div className="movie-dateTime-item">
                <h1 className="movie-date">May 3, 2022</h1>
                <p className="movie-time">09h50</p>
                <p className="movie-time">09h50</p>
                <p className="movie-time">09h50</p>
              </div>
              <div className="movie-dateTime-item">
                <h1 className="movie-date">May 5, 2022</h1>
                <p className="movie-time">09h50</p>
                <p className="movie-time">09h50</p>
                <p className="movie-time">09h50</p>
              </div>
              <div className="movie-dateTime-item">
                <h1 className="movie-date">May 10, 2022</h1>
                <p className="movie-time">09h50</p>
                <p className="movie-time">09h50</p>
                <p className="movie-time">09h50</p>
              </div>
            </div>
          </div>
          <div className="movie-comment">
            <h1 className="movie-comment-header">Comments</h1>
            <div className="user-comment-wrapper">
              <img
                className="user-avatar"
                width={60}
                height={60}
                alt=""
                src="http://1.gravatar.com/avatar/1ff5f62ac7b7738ee62ea162c06b550e?s=104&d=mm&r=g"
              />
              <div className="user-comment">
                <div className="user-name">Vinh Nam</div>
                <div className="comment-day">October 13, 2022</div>
                <div className="comment-content">phim dở</div>
              </div>
            </div>
            <div className="user-comment-wrapper">
              <img
                className="user-avatar"
                width={60}
                height={60}
                alt=""
                src="http://1.gravatar.com/avatar/1ff5f62ac7b7738ee62ea162c06b550e?s=104&d=mm&r=g"
              />
              <div className="user-comment">
                <div className="user-name">Ngân Idol</div>
                <div className="comment-day">October 13, 2022</div>
                <div className="comment-content">phim hay</div>
              </div>
            </div>
            <div className="user-comment-wrapper">
              <img
                className="user-avatar"
                width={60}
                height={60}
                alt=""
                src="http://1.gravatar.com/avatar/1ff5f62ac7b7738ee62ea162c06b550e?s=104&d=mm&r=g"
              />
              <div className="user-comment">
                <div className="user-name">Linh sọp be</div>
                <div className="comment-day">October 13, 2022</div>
                <div className="comment-content">phim tàm tạm</div>
              </div>
            </div>
            <div className="user-comment-wrapper">
              <img
                className="user-avatar"
                width={60}
                height={60}
                alt=""
                src="http://1.gravatar.com/avatar/1ff5f62ac7b7738ee62ea162c06b550e?s=104&d=mm&r=g"
              />
              <div className="user-comment">
                <div className="user-name">Đạt G</div>
                <div className="comment-day">October 13, 2022</div>
                <div className="comment-content">phim cũng được</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
