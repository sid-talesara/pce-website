// react files
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DepartmentData } from "./departmentData";
// import Records from "./data.json";

// images

import hod from "../assets/Images/hod-cs 1.png";

const Department = () => {
  const url = location.pathname;
  const [departments, setDepartments] = useState(DepartmentData);
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    const currentDepartment = departments.filter(
      (stateDept) => stateDept.url === url
    );
    setDepartment(currentDepartment[0]);
  }, [departments, url]);

  return (
    <div>
      {department && (
        <div className="department__wrap ">
          <img src={department.deptImage1} alt="" className="slider" />
          <div className="department row">
            <h1 className="department__heading">{department.deptHeading}</h1>
            <p className="department__content">{department.deptContent}</p>
            <h2 className="department__vision">Vision</h2>

            <ul className="department__visionContent">
              {department.vision.map((point) => {
                return <li>{point.point}</li>;
              })}
            </ul>

            <h2 className="department__mission">Mission</h2>

            <ul className="department__missionContent">
              {department.mission.map((point) => {
                return <li>{point.point}</li>;
              })}
            </ul>

            <div className="department__imagesWrap">
              <img
                src={department.deptImage1}
                alt=""
                className="departments-images image1"
              />
              <img
                src={department.deptImage2}
                alt=""
                className="departments-images image2"
              />
              <img
                src={department.deptImage3}
                alt=""
                className="departments-images image3"
              />
              <img
                src={department.deptImage4}
                alt=""
                className="departments-images image4"
              />
              <img
                src={department.deptImage5}
                alt=""
                className="departments-images image5"
              />
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
              <div className="hod__section__content">{department.hodMsg}</div>
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
                  <td>{department.department}</td>
                  <td>{department.program}</td>
                  <td>{department.Intake2020}</td>
                  <td>{department.Intake2021}</td>
                  <td>{department.Intake2022}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Department;
