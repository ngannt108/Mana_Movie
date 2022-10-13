import React, { useEffect, useState } from "react";
import "./Cinemas.css";
import VideoPopUp from "../VideoPopUp/VideoPopUp";

export default function Cinemas() {
  //Các biến để xử lý việc chọn loại rạp
  const [cinemaLogos, setCinemas] = useState(null);
  const [branchId, setbranchId] = useState(null);
  const [cinemaList, setCinemaList] = useState(null);
  const [cinemaName, setCinemaName] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  //Các biến để xử lý việc hiện thêm thông tin rạp
  const [pageCount, setPageCount] = useState(5);
  const [lastIndex, setLastIndex] = useState(null);
  const [totalItems, setTotalIems] = useState(null);

  //Các biến để xử lý việc chọn chi tiết rạp sau khi chọn lại rạp
  const [cineplex, setCineplex] = useState(null);
  const [ApiCinemaId, setApiCinemaId] = useState(null);
  const [films, setFilms] = useState(null);

  //Biến ngày giờ hiện tại
  const current = new Date();
  const date = `${current.getMonth() + 1}-${current.getDate()}`;
  const [currentDate, setCurentDate] = useState(null);

  const branchHandle = (id) => {
    setbranchId(id);
  };

  const listSearchHandle = (event) => {
    setSearchValue(event.target.value.toLowerCase().replaceAll(" ", ""));
  };

  const dateHandle = (date) => {
    setCurentDate(date.slice(5, 10));
  };

  // Chỉ chạy dữ liệu lấy logo rạp 1 lần
  useEffect(() => {
    setCurentDate(date);
    fetch("http://localhost:3001/Cinema")
      .then((res) => res.json())
      .then((dt) => setCinemas(dt));
  }, [date]);

  //Khi user chọn branch và nhấn xem thêm
  useEffect(() => {
    if (branchId !== null) {
      fetch(
        `http://localhost:3001/cinema/branch?cineplex=${branchId}&lastIndex=0&count=${pageCount}`
      )
        .then((res) => res.json())
        .then((dt) => {
          setFilms(null);
          setCinemaList(dt);
          setLastIndex(dt.LastIndex);
          setTotalIems(dt.TotalItems);
        });
    }
  }, [branchId, pageCount]);

  // Check mỗi khi user chuyển branch thì trả lastIndex, pageCount, totalItems và currentDate về giá trị mặc định
  useEffect(() => {
    if (branchId !== null) {
      setPageCount(5);
      setLastIndex(null);
      setTotalIems(null);
      setCurentDate(date);
    }
  }, [branchId,date]);

  useEffect(() => {
    if (cineplex && ApiCinemaId) {
      fetch(
        `http://localhost:3001/cinema/branch/schedule?apiCinemaId=${ApiCinemaId}&cineplex=${cineplex}&date=2022-${currentDate}`
      )
        .then((res) => res.json())
        .then((dt) => {
          setFilms(dt);
        });
    }
  }, [cineplex, ApiCinemaId, currentDate]);

  return (
    <section id="date" className="container">
      <div className="row">
        {/* Nav pills */}
        <div>
          <ul className="nav nav-pills col-600-12">
            {cinemaLogos &&
              cinemaLogos.map((cinema, index) => (
                <li
                  onClick={() => branchHandle(cinema.Id)}
                  key={index}
                  className="nav-item"
                >
                  <a className="nav-link" data-toggle="pill" href="#film">
                    <img width={80} alt="" src={cinema.Logo} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
        {/* Tab panes */}
        <div className="tab-content">
          <div className="cinemas-list">
            {cinemaList ? (
              <>
                <input
                  onKeyUp={(event) => listSearchHandle(event)}
                  className="cinemas-list-search"
                  placeholder="Find cinema"
                />
                {cinemaList.Items.filter((cinema) =>
                  cinema.Name.toLowerCase()
                    .replaceAll(" ", "")
                    .includes(searchValue)
                ).map((cinema, i) => (
                  <div
                    key={i}
                    className="onClick-cinema"
                    onClick={() => {
                      setCineplex(cinema.Cineplex);
                      setApiCinemaId(cinema.ApiCinemaId);
                      setCinemaName(cinema.Name);
                    }}
                  >
                    <img height={40} width={40} alt="" src={cinema.Logo} />
                    <p>{cinema.Name}</p>
                  </div>
                ))}
                {totalItems <= lastIndex ? (
                  true
                ) : (
                  <button
                    onClick={() => setPageCount(lastIndex + 5)}
                    className="show-more-btn"
                  >
                    Hiện thêm rạp
                  </button>
                )}
              </>
            ) : (
              <div className="message-empty">
                Please choose a cinema's branch
              </div>
            )}
          </div>
          {/* Films */}
          <div className="tab-pane" id="film">
            {films && (
              <>
                <div className="week">
                  {films.ShowTimes.map((date, i) => {
                    return (
                      <div
                        onClick={() => {
                          dateHandle(date);
                          console.log(currentDate);
                        }}
                        className="day-wrapper"
                        key={i}
                      >
                        <div>{date.slice(5, 10)}</div>
                      </div>
                    );
                  })}
                </div>
                <h3 style={{ margin: "28px" }}>
                  Lịch chiếu phim {cinemaName} ngày {currentDate}
                </h3>
                {films.Films.map((film, i) => (
                  <div key={i} className="date__item row">
                    <a className="col-md-2" href="#">
                      <img className="img-fluid" src={film.GraphicUrl} alt="" />
                    </a>
                    <div className="col-md-10">
                      <h1>{film.ApiGenreName}</h1>
                      <h2>{film.Title}</h2>
                      <p>{film.SynopsisEn}</p>
                      <div className="rating-row">
                        <div className="film-rating">{film.ApiRating}</div>
                        <div className="film-trailer"><VideoPopUp link={film.TrailerUrl.replace('watch?v=','embed/')}/></div>
                        {/* <span>{films.Films[i].VersionsCaptions[0].ShowTimes[0].Duration} mins</span> */}
                      </div>
                     
                      <div className="row">
                        <div className="date__time col-md-10">
                          <i className="far fa-clock"></i>
                          <span>VIEWING TIMES</span>
                          <div>
                          {film.VersionsCaptions[0].ShowTimes.map((showTime,i)=>{
                           return <span className="time" key={i}>{showTime.ShowTime.slice(11,16)}</span>
                          })}
                          </div>
                        </div>
                        {/* <div className="date__min col-md-2 text-right">
                          <span>{films.Films[i].VersionsCaptions[0].ShowTimes[0].Duration} mins</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
