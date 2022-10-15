import React, { createContext } from "react";
import MoviesReducer from "../Reducer/MoviesReducer";
import AccountsReducer from "../Reducer/AccountsReducer";
export const StoreContext = createContext(null);
const Store = ({ children }) => {
  const [coming, DispatchComingMovie] = MoviesReducer();
  const [showing, DispatchShowingMovie] = MoviesReducer();
  const [detail, DispatchDetail] = MoviesReducer();
  const [account, DispatchAccount] = AccountsReducer(null);
  const store = {
    ComingMovie: coming,
    ComingDispatch: DispatchComingMovie,
    ShowingMovie: showing,
    ShowingDispatch: DispatchShowingMovie,
    userAccount: account,
    AccountDispatch: DispatchAccount,
    MovieDetail: detail,
    MovieDetailDispatch: DispatchDetail,
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default Store;
