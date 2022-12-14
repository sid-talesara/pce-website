import React from "react";

// Images
// import image from "../../Assets/images/bird.jpg";
const image = "";
const VMQ = () => {
  return (
    <div className="vmq__wrap">
      <img src={image} alt="" className="slider" />
      <div className="vmq row">
        <div className="vmq__vision">
          <h2 className="vmq__vision--heading">Vision</h2>
          <p className="vmq__visionContent">
            To create knowledge based society with scientific temper, team
            spirit and dignity of labour to face the global competitive
            challenges.
          </p>
        </div>
        <div className="vmq__mission">
          <h2 className="vmq__mission--heading">Mission</h2>
          <p className="vmq__missionContent">
            To evolve and develop skill based systems for effective delivery of
            knowledge so as to equip young professionals with dedication &
            commitment to excellence in all spheres of life.
          </p>
        </div>
        <div className="vmq__quality">
          <h2 className="vmq__quality--heading">Quality Policy</h2>
          <p className="vmq__qualityContent">
            To provide quality education through faculty development, updating
            of facilities and continual improvement meeting university norms and
            keeping stake holders satisfied.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VMQ;
