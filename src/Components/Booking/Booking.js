import React, { useContext } from "react";
import "./Booking.css";
import { StoreContext } from "../../Redux/Store/Store";

export default function Booking() {
  const store = useContext(StoreContext);

  const arrSeat = "ABCDEFGHI".split("");
  const arrSeatLeftNum = "01 02 03 04 05 06 07 08".split(" ");
  const arrSeatRightNum = "09 10 11 12".split(" ");
  var count = 0;
  var arrSelectedSeat = [];

  const checkSelected = (e) => {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("selected")
    ) {
      e.target.classList.add("selected");
      arrSelectedSeat.push(e.target.innerText);
      count++;
    } else if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
      arrSelectedSeat.splice(arrSelectedSeat.indexOf(e.target.innerText), 1);
      count--;
    }
  };

  return (
    store.Booking.booking.length > 0 && (
      <div>
        <img
          width={"100%"}
          alt=""
          src="https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/12/17150018/BW-Wil_Haygood-54-1.jpg?fbclid=IwAR2h6hTgT0ag4vLusQN3CrBQyKZYa4T-4t-izl4q9NwMJGDuJLegzE2K8lQ"
          className="booking-wallpaper"
        />
        <div className="booking-wrapper">
          <div className="booking-header">
            <div className="booking-seat">
              <div className="booking-screen">Screen</div>
              <div className="seat-wrapper">
                <div className="seat-left">
                  {arrSeat.map((seat) => {
                    return arrSeatLeftNum.map((num, i) => {
                      return (
                        <div
                          key={i}
                          onClick={(e) => {
                            checkSelected(e);
                          }}
                          className="seat"
                          name={seat + num}
                        >
                          {seat + num}
                        </div>
                      );
                    });
                  })}
                </div>
                <div className="seat-right">
                  {arrSeat.map((seat) => {
                    return arrSeatRightNum.map((num, i) => {
                      return (
                        <div
                          key={i}
                          onClick={(e) => {
                            checkSelected(e);
                          }}
                          className="seat"
                          name={seat + num}
                        >
                          {seat + num}
                        </div>
                      );
                    });
                  })}
                </div>
                <div className="cinema-note">
                  <div className="single">Casual seat</div>
                  <div className="choosing">Seat selecting</div>
                  <div className="busy">Seat have been selected</div>
                  <div style={{ paddingLeft: "12px" }}>
                    1 ticket / 90.000 VND
                  </div>
                  <div
                    style={{ paddingLeft: "12px" }}
                    onClick={() => {
                      console.log(
                        `Bạn đã đặt ${count} vé, tổng thanh toán ${count * 90000} bạn có muốn thanh toán ?`
                      );
                    }}
                  >
                    payment
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="booking-info">
                <img
                  className="booking-movie-banner"
                  height={"480px"}
                  src={store.Booking.booking[4]}
                  alt=""
                />
                <div className="booking-movie-name">
                  {store.Booking.booking[1]}
                </div>
                <div className="booking-date">
                  {store.Booking.booking[2]} - {store.Booking.booking[3]}/2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
