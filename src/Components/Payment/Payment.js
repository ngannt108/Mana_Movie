import React, { useContext,useEffect } from "react";
import { StoreContext } from "../../Redux/Store/Store";
import "./Payment.css";

export default function Payment() {
  const store = useContext(StoreContext);
  const userEmail = store.userAccount.account;
  const movieName = store.Booking.booking[1];
  const movieTime = store.Payment.payment[1];
  const cinemaName = store.Booking.booking[0];
  const cineplex = store.Booking.booking[5];
  const apiCinemaId = store.Booking.booking[6];
  const apiFilmId = store.Booking.booking[7];
  const cinemaAddress = store.Booking.booking[8];
  const seat = store.Payment.payment[0];
  const totalPayment = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-payment">
      <div className="payment-wrapper">
        <div className="recheck-info">
          <h3>Recheck your booking information</h3>
          <div className="info-wrapper">
            <img
              className="booking-movie-banner"
              height={"280px"}
              src={store.Booking.booking[4]}
              alt=""
            />
            <div className="right-info">
              <p className="payment-movie-name">{movieName}</p>
              <p className="payment-movie-date">{movieTime}</p>
              <p>{cinemaName}</p>
              <p>{cinemaAddress}</p>
              <p>
                Seat(s) :{" "}
                {store.Payment.payment[0].slice(0, -1).map((seat, i) => {
                  return seat + " - ";
                })}
                {store.Payment.payment[0].slice(-1)}
              </p>
            </div>
          </div>
        </div>
        <div className="form-payment">
          <form>
            <div className="form-payment-header">
              <h3>Please enter payment info</h3>
            </div>
            <div className="form-payment-body">
              <label>Email</label>
              <input readOnly value={userEmail} />
              <br />
              <label>Card Number</label>
              <input />
              <br />
              <label>Card Expiry Date</label>
              <input />
              <br />
              <label>Card CVC</label>
              <input />
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
