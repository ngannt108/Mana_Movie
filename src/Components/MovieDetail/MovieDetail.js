import React from "react";
import "./MovieDetail.css";

export default function MovieDetail() {
  return (
    <div className="movie-detail-container">
      <div className="movie-banner">
        <img
          alt=""
          width={"100%"}
          src="https://preview.redd.it/hp5qeg0s1u491.jpg?width=1500&format=pjpg&auto=webp&s=d2e002f038fca4a9f6108741abea7192d0a2a744"
        />
      </div>
      <div className="movie-detail-main-content">
        <div className="movie-detail-all-info">
          <div className="left-banner">
            <img
              width={"250"}
              alt=""
              src="https://pbs.twimg.com/media/Fbrr88BX0AAUCxu?format=jpg&name=large"
            />
          </div>
          <div>
            <div className="base-info">
              <div className="movie-name">
                <h1>Black Adam</h1>
              </div>
              <p className="movie-duaration">2 hours 00 minutes</p>
              <div className="movie-row">
                <p className="movie-label">Actor:</p>
                <p className="label-info">
                  Dwayne Johnson, Pierce Brosnan, Sarah Shahi
                </p>
              </div>
              <div className="movie-row">
                <p className="movie-label">Director:</p>
                <p className="label-info">Jaume Collet-Serra</p>
              </div>
              <div className="movie-row">
                <p className="movie-label">Genre:</p>
                <p className="label-info">Action</p>
              </div>
              <div className="movie-row">
                <p className="movie-label">Release:</p>
                <p className="label-info">October 21, 2022</p>
              </div>
              <div className="movie-row">
                <p className="movie-label">Language:</p>
                <p className="label-info">English</p>
              </div>
            </div>
            <div className="movie-synopsis">
              <h1 className="synopsis-header">Synopsis</h1>
              <div className="synopsis-content">
                After nearly five thousand years of imprisonment, Black Adam, an
                antihero from the ancient city of Kahndaq, is unleashed into
                modern times. His brute tactics and way of justice attract the
                attention of the Justice Society of America, who tries to stop
                his rampage, teach him how to be a hero more than a villain, and
                must team up to stop a force more powerful than Adam himself.
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
        <img className="user-avatar" width={60} height={60} alt="" src="http://1.gravatar.com/avatar/1ff5f62ac7b7738ee62ea162c06b550e?s=104&d=mm&r=g"/>
        <div className="user-comment">
            <div className="user-name">Vinh Nam</div>
            <div className="comment-day">October 13, 2022</div>
            <div className="comment-content">phim dở</div>
        </div>
      </div>
      <div className="user-comment-wrapper">
        <img className="user-avatar" width={60} height={60} alt="" src="http://1.gravatar.com/avatar/1ff5f62ac7b7738ee62ea162c06b550e?s=104&d=mm&r=g"/>
        <div className="user-comment">
            <div className="user-name">Ngân Idol</div>
            <div className="comment-day">October 13, 2022</div>
            <div className="comment-content">phim hay</div>
        </div>
      </div>
      <div className="user-comment-wrapper">
        <img className="user-avatar" width={60} height={60} alt="" src="http://1.gravatar.com/avatar/1ff5f62ac7b7738ee62ea162c06b550e?s=104&d=mm&r=g"/>
        <div className="user-comment">
            <div className="user-name">Linh sọp be</div>
            <div className="comment-day">October 13, 2022</div>
            <div className="comment-content">phim tàm tạm</div>
        </div>
      </div>
      <div className="user-comment-wrapper">
        <img className="user-avatar" width={60} height={60} alt="" src="http://1.gravatar.com/avatar/1ff5f62ac7b7738ee62ea162c06b550e?s=104&d=mm&r=g"/>
        <div className="user-comment">
            <div className="user-name">Đạt G</div>
            <div className="comment-day">October 13, 2022</div>
            <div className="comment-content">phim cũng được</div>
        </div>
      </div>
      </div>
    </div>
  );
}
