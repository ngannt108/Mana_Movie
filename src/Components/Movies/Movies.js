import React, { useEffect, useContext } from "react";
import Soon from "../Soon/Soon";
import NewIn from "../NewIn/NewIn";
import { StoreContext } from "../../Redux/Store/Store";
import { API_MOVIE } from "../../Common/ApiController";
export default function Movies() {
  const store = useContext(StoreContext);
  useEffect(() => {
    fetch(API_MOVIE.MOVIE)
      .then((res) => res.json())
      .then((dt) => {
        store.ShowingDispatch({
          type: "NOW",
          payload: dt.now,
        });
        store.ComingDispatch({
          type: "SOON",
          payload: dt.soon,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NewIn />
      <Soon />
    </>
  );
}
