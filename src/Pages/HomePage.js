import React from "react";
import Slider from "../Components/Slider";
const HomePage = () => {
  return (
    <>
      <div className="sliderContainer">
        <Slider
          images={[
            {
              url: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__340.jpg",
              text: "dummy image",
            },
            {
              url: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__340.jpg",
              text: "dummy image",
            },
          ]}
        />
      </div>
    </>
  );
};

export default HomePage;
