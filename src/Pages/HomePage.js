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
      <div className="introduction">
        <h1 className="secondary_heading_one" style={{ color: "red" }}>
          About
        </h1>
        <h1 className="secondary_heading_two">
          Poornima College Of Engineering
        </h1>
        <p>
          Poornima College of Engineering, was established in 2000 with the aim
          of imparting pragmatic technical education. In its magnificent journey
          of 18 years, PCE has set benchmarks and reached at new pinnacles in
          engineering education with dedication, perseverance and devotion. PCE
          is spearheading its outstanding voyage with motto ‘Success is not a
          destination, it’s a journey’. Poornima College of Engineering, Jaipur
          has been consistently ranked 2nd out of 116 Engineering Colleges in
          QIV Ranking of Rajasthan Technical University, Kota, from the last two
          academic years. The QIV Ranking is based primarily upon Academics,
          University results, Placements & Alumni.
        </p>
      </div>
    </>
  );
};

export default HomePage;
