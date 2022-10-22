import React, { useEffect, useState, useContext } from "react";
import "./MovieDetailCinemas.css";
import ModalBookingPopUp from "../ModalBookingPopUp/ModalBookingPopUp";
import ModalSignInPopUp from "../ModalSignInPopUp/ModalSignInPopUp";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Redux/Store/Store";

export default function Cinemas(props) {
  //Các biến để xử lý việc chọn hãng rạp
  const store = useContext(StoreContext);

  console.log(store.Showtime.schedule);

  const [branchId, setbranchId] = useState(null);
  const [cinemaName, setCinemaName] = useState(null);
  const [cinemaAddress, setCinemaAddress] = useState(null);

  //Các biến để xử lý việc chọn chi tiết rạp sau khi chọn hãng rạp
  const [cineplex, setCineplex] = useState(null);
  const [ApiCinemaId, setApiCinemaId] = useState(null);
  const [films, setFilms] = useState(null);

  //Biến ngày giờ hiện tại
  const current = new Date();
  const [currentDate, setCurentDate] = useState(null);

  useEffect(() => {
    setCurentDate(`${current.getMonth() + 1}-${current.getDate()}`);
  }, []);

  useEffect(() => {
    setCinemaName(null);
    [...document.getElementsByClassName("onClick-cinema")].forEach(
      (element) => {
        if (element.classList.value.includes("active-mdc")) {
          element.classList.remove("active-mdc");
        }
      }
    );
  }, [branchId]);

  const checkOnClick = (e, className) => {
    [...document.getElementsByClassName(className)].forEach((element) => {
      if (element.classList.value.includes("active-mdc")) {
        element.classList.remove("active-mdc");
      }
    });
    if (e.target.classList.value.includes(className))
      e.target.classList.add("active-mdc");
  };

  return (
    <>
      <section id="date" className="container">
        <div className="week-mdc">
          {store.Showtime.schedule.ShowTimes.map((date, i) => {
            return (
              <div
                onClick={(e) => {
                  props.setDate(date.slice(5, 10));
                  setCurentDate(date.slice(5, 10));
                  checkOnClick(e, "dw-mdc");
                }}
                className="dw-mdc"
                key={i}
              >
                {date.slice(8, 10)}/{date.slice(5, 7)}
              </div>
            );
          })}
        </div>
        <div className="row">
          {/* Cinema Logo */}
          <div style={{ width: "100%" }}>
            <ul className="nav nav-pills col-600-12 border-top">
              {store.Showtime.schedule.Cineplexs &&
                store.Showtime.schedule.Cineplexs.map((cinema, index) => (
                  <li
                    onClick={() => setbranchId(cinema.Id)}
                    key={index}
                    className="nav-item"
                  >
                    <Link className="nav-link" data-toggle="pill" href="#film">
                      <img width={56} alt="" src={cinema.Logo} />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          {/* Tab panes */}
          <div className="tab-content">
            <div className="cinemas-list-mdc">
              {branchId ? (
                <>
                  {store.Showtime.schedule.Cinemas.Items.filter(
                    (cinema) => cinema.Cineplex === branchId
                  ).map((cinema, i) => (
                    <div
                      key={i}
                      className="onClick-cinema"
                      onClick={(e) => {
                        setCinemaName(cinema.Name);
                        setCinemaAddress(cinema.Address);
                        checkOnClick(e, "onClick-cinema");
                      }}
                    >
                      <img height={40} width={40} alt="" src={cinema.Logo} />
                      <p>{cinema.Name}</p>
                    </div>
                  ))}
                </>
              ) : (
                <div className="mess-mdc">Please choose a cinema's branch</div>
              )}
            </div>
            {/* Show Time */}
            <div id="film">
              {cinemaName && (
                <div>
                  {/* Show Time Detail */}
                  {store.Showtime.schedule.Cinemas.Items.filter((cinema) => {
                    return cinema.Name === cinemaName;
                  }).map((film, i) => (
                    <div key={i} className="date_item_mdc row">
                      <div className="col-md-10">
                        <div className="row">
                          <div className="date__time col-md-10">
                            <div className="time-mdc">
                              {film.VersionsCaptions[0].ShowTimes.map(
                                (showTime, i) => {
                                  return (
                                    <div
                                      style={{ display: "inline-block" }}
                                      onClick={() => {
                                        store.BookingDispatch({
                                          type: "BOOKING",
                                          payload: [
                                            cinemaName,
                                           props.title,
                                            showTime.ShowTime.slice(11, 16),
                                            currentDate.slice(3, 5) +
                                              "/" +
                                              currentDate.slice(0, 2),
                                            props.banner,
                                            cineplex,
                                            ApiCinemaId,
                                            film.ApiFilmId,
                                            cinemaAddress,
                                          ],
                                        });
                                      }}
                                    >
                                      {store.userAccount.account ? (
                                        <ModalBookingPopUp
                                          info={[
                                            cinemaName,
                                            props.title,
                                            showTime.ShowTime.slice(11, 16),
                                            currentDate.slice(3, 5) +
                                              "/" +
                                              currentDate.slice(0, 2),
                                          ]}
                                        />
                                      ) : (
                                        <ModalSignInPopUp
                                          info={showTime.ShowTime.slice(11, 16)}
                                        />
                                      )}
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <p className="cinema-address-mdc">{cinemaAddress}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
