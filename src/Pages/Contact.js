import React from "react";
import PCE_campus from "../Assets/images/PCE_AdminBlock.png";
import Map from "../Components/Map";
const handleSubmit = () => {};
const Contact = () => {
  return (
    <div className="contactPage">
      <h1 className="contact_heading">
        <span>Contact</span> Us
      </h1>
      <div className="contactPage_container">
        <div className="contact_form_container">
          <h3>Drop Down Your Message</h3>
          <div className="contact_form">
            <input
              type="text"
              placeholder="Enter Name"
              className="inputfield"
            />
            <input
              type="number"
              placeholder="Enter Mobile Number"
              className="inputfield"
            />
            <input
              type="email"
              placeholder="Enter Email id"
              className="inputfield"
            />
            <textarea
              type="text"
              placeholder="Message"
              aria-multiline
              className="Message_textarea"
            />
            <div className="checkbox_container">
              <input type="checkbox" /> I agree to recieve information from
              Poornima College Of Engineering
            </div>
            <button
              className="submitbtn"
              type="submit"
              onClick={(e) => handleSubmit(e)}>
              Sumbit
            </button>
          </div>
        </div>
        <div className="contactPage_image">
          <img src={PCE_campus} />
        </div>
      </div>
      <div className="map_container">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
