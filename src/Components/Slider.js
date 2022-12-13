import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = ({ images }) => {
  return (
    <Carousel
      className="slider"
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      stopOnHover={false}
      swipeable={true}
      showThumbs={false}
      showStatus={false}
      dynamicHeight={true}
      emulateTouch={true}>
      {images?.map((image, i) => {
        console.log(image);
        return (
          <div>
            <img src={image.url} key={i} alt={image.text} />
          </div>
        );
      })}
    </Carousel>
  );
};
export default Slider;
