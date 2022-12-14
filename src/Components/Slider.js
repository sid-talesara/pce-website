import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../Assets/images/Slider/1.png";
import image2 from "../Assets/images/Slider/2.png";
import image3 from "../Assets/images/Slider/3.jpg";
import image4 from "../Assets/images/Slider/4.jpg";

const images = [image1, image2, image3, image4];
const Slider = () => {
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
      emulateTouch={true}
      interval={5000}>
      {images?.map((image, i) => {
        return (
          <div>
            <img src={image} key={i} alt={`slider image${i + 1}`} />
          </div>
        );
      })}
    </Carousel>
  );
};
export default Slider;
