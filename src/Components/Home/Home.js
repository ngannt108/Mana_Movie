import React, { useEffect, useContext } from "react";
import { StoreContext } from "../../Redux/Store/Store";
import Carousel from "../Carousel/Carousel";
import Cinemas from "../Cinemas/Cinemas";
import NewIn from "../NewIn/NewIn";
import Soon from "../Soon/Soon";
import { API_MOVIE } from "../../Common/ApiController";

export default function Home() {
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
      <Carousel />
       <NewIn />
      <Soon />
      
    </>
  );
}
