import Carousel from "../Carousel/Carousel";
import Cinemas from "../Cinemas/Cinemas";
import Movies from "../Movies/Movies";
import NewIn from "../NewIn/NewIn";

export default function Home() {
 
  return (
    <>
      <Carousel />
      <NewIn />
      <Cinemas />
      <Movies/>
    </>
  );
}
