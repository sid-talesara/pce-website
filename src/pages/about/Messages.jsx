import React from "react";
// data
import data from "./messages.json";
// images
import image from "../../assets/Images/bird.jpg";
const Messages = () => {
  return (
    <div className="msgs__wrap">
      <img src={image} alt="" className="slider" />

      <div className="msgs row ">
        <h2 className="msgs__heading">Messages</h2>
        {data &&
          data.map((msg) => {
            return (
              <div className="msgs__section" key={msg.id}>
                <div className="msgs__section__graphics">
                  <img src={msg.img} alt="fsd" />
                  <h3>{msg.person}</h3>
                  <p>{msg.work} </p>
                </div>
                <div className="msgs__section__content">{msg.msg}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Messages;
