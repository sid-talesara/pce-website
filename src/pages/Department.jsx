// react files
import React, { useState } from "react";

import { DepartmentData } from "./departmentData";
// import Records from "./data.json";
// images
import image from "../assets/Images/bird.jpg";
import hod from "../assets/Images/hod-cs 1.png";

const Department = () => {
  return (
    <div className="department__wrap ">
      <img src={image} alt="" className="slider" />
      <div className="department row">
        <h1 className="department__heading">{DepartmentData.deptHeading}</h1>
        <p className="department__content">das</p>
        <h2 className="department__vision">Vision</h2>

        <ul className="department__visionContent">
          <li>asd</li>
        </ul>

        <h2 className="department__mission">Mission</h2>

        <ul className="department__missionContent">
          <li>das</li>
          <li>as</li>
          <li>as</li>
        </ul>

        <div className="department__imagesWrap">
          <img src={image} alt="" className="departments-images image1" />
          <img src={image} alt="" className="departments-images image2" />
          <img src={image} alt="" className="departments-images image3" />
          <img src={image} alt="" className="departments-images image4" />
          <img src={image} alt="" className="departments-images image5" />
        </div>
      </div>
      <div className="hod row ">
        <h1 className="hod__heading">HOD Message</h1>
        <div className="hod__section">
          <div className="hod__section__graphics">
            <img src={hod} alt="nikita jain photo" />
            <h3>Dr. Nikita jain</h3>
            <p>HOD Computer Engineering</p>
          </div>
          <div className="hod__section__content">sdg</div>
        </div>
      </div>
      <div className="programs row">
        <h1 className="programs__heading">Programs Offered</h1>
        <table>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Department</th>
              <th>Program</th>
              <th>2020-21 Intake</th>
              <th>2021-22 Intake</th>
              <th>2022-23 intake</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Department of Computer Engineering</td>
              <td>B. tech. (Computer Engineering)</td>
              <td>500</td>
              <td>500</td>
              <td>500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Department;
