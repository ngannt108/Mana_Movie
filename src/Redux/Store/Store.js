import React, { createContext } from "react";
import MoviesReducer from "../Reducer/MoviesReducer";
import AccountsReducer from "../Reducer/AccountsReducer";
import BookingReducer from "../Reducer/BookingReducer";
import PaymentReducer from '../Reducer/PaymentReducer';

export const StoreContext = createContext(null);
const Store = ({ children }) => {
  const [coming, DispatchComingMovie] = MoviesReducer();
  const [showing, DispatchShowingMovie] = MoviesReducer();
  const [detail, DispatchDetail] = MoviesReducer();
  const [account, DispatchAccount] = AccountsReducer(null);
  const [schedule, DispatchSchedule] = MoviesReducer();
  const [booking, DispatchBooking]= BookingReducer(null);
  const [payment, DispatchPayment] = PaymentReducer(null);

  const store = {
    ComingMovie: coming,
    ComingDispatch: DispatchComingMovie,
    ShowingMovie: showing,
    ShowingDispatch: DispatchShowingMovie,
    userAccount: account,
    AccountDispatch: DispatchAccount,
    MovieDetail: detail,
    MovieDetailDispatch: DispatchDetail,
    Showtime: schedule,
    ShowtimeDispatch: DispatchSchedule,
    Booking : booking,
    BookingDispatch : DispatchBooking,
    Payment : payment,
    PaymentDisPatch : DispatchPayment,
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default Store;