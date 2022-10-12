import Carousel from "../Carousel/Carousel";
import Cinemas from "../Cinemas/Cinemas";
import Soon from "../Soon/Soon";
import NewIn from "../NewIn/NewIn";

export default function Home() {
 
  return (
    <>
      <Carousel />
      <NewIn />
      <Soon/>
      <Cinemas />
    </>
  );
}
