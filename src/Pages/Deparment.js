// react files
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Department = () => {
  const { id } = useParams();
  const url = `/departments/${id}`;
  const DepartmentData = [
    // computer engineering
    {
      url: "/departments/computer-engineering",
      deptHeading: "About the Department of Computer Engineering",
      deptContent:
        "Computer Engineering combines the academic disciplines of electronics engineering and computer sciences which helps our engineering graduates to combine their understanding of computer hardware and software to innovate the stream. Computer engineering programmes prepare graduates for highly valued, sky-high careers in design, development, research and testing of various hardware and software. The department focuses not only on the theoretical aspects but emphasize the overall development of the students. It conducts various co-curricular activities such as informative workshops and industrial visits to companies. It makes the student industry ready with all practical exposer, expert talks on new technologies, technical events like coding competition, hackathon, etc. We believe, such activities help them to meet the demands of Industry or existing market.",
      HodImage: "../Assets/images/Deparments/CS/hodImage.png",
      vision: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
      ],
      mission: [
        {
          point:
            "To provide a learning-centered environment that will enable students and faculty members to achieve their goals empowering them to compete globally for the most desirable careers in academia and industry. ",
        },
        {
          point:
            "To contribute significantly to the research and the discovery of new arenas of knowledge and methods in the rapid developing field of Computer Engineering.",
        },
        {
          point:
            "To support society through participation and transfer of advanced technology from one sector to another.",
        },
      ],
      deptImage1: "../Assets/images/Deparments/CS/departmentImage1.jpg",
      deptImage2: "../Assets/images/Deparments/CS/departmentImage2.jpg",
      deptImage3: "../Assets/images/Deparments/CS/departmentImage3.jpg",

      hodName: "Dr. Nikita Jain",
      hodDept: "HOD Computer Engineering",
      hodMsg:
        "To support society through participation and transfer of advanced technology from one sector to another.",

      department: "Department of Computer Engineering",
      program: "B.tech. (Computer Engineering)",
      Intake2020: 500,
      Intake2021: 500,
      Intake2022: 500,
    },

    // Advance computing
    {
      url: "/departments/advance-computing",
      deptHeading: "fsd",
      mainImg: "",
      deptContent: "computer this",
      vision: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      mission: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      deptImage1: "",
      deptImage2: "",
      deptImage3: "",
      deptImage4: "",
      deptImage5: "",

      hodName: "Dr. Nikita Jain",
      hodDept: "HOD Computer Engineering",
      hodMsg:
        "A hearty welcome to the Department of Computer Engineering at Poornima college of Engineering, Jaipur. We are dedicated to providing not only the technical education to our students but also the leadership skills through which they can produce employment to others. The department offers graduate program B. Tech in Computer Engineering and B. Tech in CSE (Regional language), enriched in core learning, challenges and opportunities. The department’s major force is a team of well-qualified and dedicated faculty members that permanently support students for their academic excellence and instil a spirit of Team-Work in them. It is our major responsibility to keep our students committed not only to technical education but also to their self-reflection and critical thinking and to meet the expectations of the industries.\n <br></br> The teaching module comprises lectures, tutorials and practical. The methodology adopted in the classroom learning is based on application of innovative techniques, regular coursework and relations between teachers and students. <br></br> <br></br>Our department is also emphasis to identify the course outcomes for their subjects and perform mapping with POs, PEOs and PSOs and needs to fulfil the identified curricular gaps for the attainment of POs and PSOs by delivering lectures beyond the syllabus, arranging expert lectures, value added courses, industrial training, internship etc.<br></br> <br></br> Our placement records have always been very impressive, with the large number of students being placed year after year in highly reputed core companies and public sector units. Our alumni hold senior positions in industries as well as in academic institutions, both in India and abroad. The research work forms the department is contributing strongly across several disciplines that include Machine Learning, Big Data, Software Engineering and IOT. <br></br> <br></br>The department have RTU recognized Centre of Excellence in Artificial Intelligence and Big Data. The Department exhilarate students to get registered in variety of courses offered by online portals such as NPTEL, Swayam, Microsoft, Coursera, etc.",

      department: "Department of Computer Engineering",
      program: "B.tech. (Computer Engineering)",
      Intake2020: 500,
      Intake2021: 500,
      Intake2022: 500,
    },
    // civil Department
    {
      url: "/departments/civil-engineering",
      deptHeading: "Civil",
      mainImg: "",
      deptContent: "computer this",
      vision: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      mission: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      deptImage1: "",
      deptImage2: "",
      deptImage3: "",
      deptImage4: "",
      deptImage5: "",

      hodName: "Dr. Nikita Jain",
      hodDept: "HOD Computer Engineering",
      hodMsg:
        "A hearty welcome to the Department of Computer Engineering at Poornima college of Engineering, Jaipur. We are dedicated to providing not only the technical education to our students but also the leadership skills through which they can produce employment to others. The department offers graduate program B. Tech in Computer Engineering and B. Tech in CSE (Regional language), enriched in core learning, challenges and opportunities. The department’s major force is a team of well-qualified and dedicated faculty members that permanently support students for their academic excellence and instil a spirit of Team-Work in them. It is our major responsibility to keep our students committed not only to technical education but also to their self-reflection and critical thinking and to meet the expectations of the industries.\n <br></br> The teaching module comprises lectures, tutorials and practical. The methodology adopted in the classroom learning is based on application of innovative techniques, regular coursework and relations between teachers and students. <br></br> <br></br>Our department is also emphasis to identify the course outcomes for their subjects and perform mapping with POs, PEOs and PSOs and needs to fulfil the identified curricular gaps for the attainment of POs and PSOs by delivering lectures beyond the syllabus, arranging expert lectures, value added courses, industrial training, internship etc.<br></br> <br></br> Our placement records have always been very impressive, with the large number of students being placed year after year in highly reputed core companies and public sector units. Our alumni hold senior positions in industries as well as in academic institutions, both in India and abroad. The research work forms the department is contributing strongly across several disciplines that include Machine Learning, Big Data, Software Engineering and IOT. <br></br> <br></br>The department have RTU recognized Centre of Excellence in Artificial Intelligence and Big Data. The Department exhilarate students to get registered in variety of courses offered by online portals such as NPTEL, Swayam, Microsoft, Coursera, etc.",

      department: "Department of Computer Engineering",
      program: "B.tech. (Computer Engineering)",
      Intake2020: 500,
      Intake2021: 500,
      Intake2022: 500,
    },
    // Electrical Engineering
    {
      url: "/departments/electrical-engineering",
      deptHeading: "Electrical Engineering",
      mainImg: "",
      deptContent: "computer this",
      vision: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      mission: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      deptImage1: "",
      deptImage2: "",
      deptImage3: "",
      deptImage4: "",
      deptImage5: "",

      hodName: "Dr. Nikita Jain",
      hodDept: "HOD Computer Engineering",
      hodMsg:
        "A hearty welcome to the Department of Computer Engineering at Poornima college of Engineering, Jaipur. We are dedicated to providing not only the technical education to our students but also the leadership skills through which they can produce employment to others. The department offers graduate program B. Tech in Computer Engineering and B. Tech in CSE (Regional language), enriched in core learning, challenges and opportunities. The department’s major force is a team of well-qualified and dedicated faculty members that permanently support students for their academic excellence and instil a spirit of Team-Work in them. It is our major responsibility to keep our students committed not only to technical education but also to their self-reflection and critical thinking and to meet the expectations of the industries.\n <br></br> The teaching module comprises lectures, tutorials and practical. The methodology adopted in the classroom learning is based on application of innovative techniques, regular coursework and relations between teachers and students. <br></br> <br></br>Our department is also emphasis to identify the course outcomes for their subjects and perform mapping with POs, PEOs and PSOs and needs to fulfil the identified curricular gaps for the attainment of POs and PSOs by delivering lectures beyond the syllabus, arranging expert lectures, value added courses, industrial training, internship etc.<br></br> <br></br> Our placement records have always been very impressive, with the large number of students being placed year after year in highly reputed core companies and public sector units. Our alumni hold senior positions in industries as well as in academic institutions, both in India and abroad. The research work forms the department is contributing strongly across several disciplines that include Machine Learning, Big Data, Software Engineering and IOT. <br></br> <br></br>The department have RTU recognized Centre of Excellence in Artificial Intelligence and Big Data. The Department exhilarate students to get registered in variety of courses offered by online portals such as NPTEL, Swayam, Microsoft, Coursera, etc.",

      department: "Department of Computer Engineering",
      program: "B.tech. (Computer Engineering)",
      Intake2020: 500,
      Intake2021: 500,
      Intake2022: 500,
    },
    // ECE
    {
      url: "/departments/electronics-communication-engineering",
      deptHeading: "ECE",
      mainImg: "",
      deptContent: "computer this",
      vision: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      mission: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      deptImage1: "",
      deptImage2: "",
      deptImage3: "",
      deptImage4: "",
      deptImage5: "",

      hodName: "Dr. Nikita Jain",
      hodDept: "HOD Computer Engineering",
      hodMsg:
        "A hearty welcome to the Department of Computer Engineering at Poornima college of Engineering, Jaipur. We are dedicated to providing not only the technical education to our students but also the leadership skills through which they can produce employment to others. The department offers graduate program B. Tech in Computer Engineering and B. Tech in CSE (Regional language), enriched in core learning, challenges and opportunities. The department’s major force is a team of well-qualified and dedicated faculty members that permanently support students for their academic excellence and instil a spirit of Team-Work in them. It is our major responsibility to keep our students committed not only to technical education but also to their self-reflection and critical thinking and to meet the expectations of the industries.\n <br></br> The teaching module comprises lectures, tutorials and practical. The methodology adopted in the classroom learning is based on application of innovative techniques, regular coursework and relations between teachers and students. <br></br> <br></br>Our department is also emphasis to identify the course outcomes for their subjects and perform mapping with POs, PEOs and PSOs and needs to fulfil the identified curricular gaps for the attainment of POs and PSOs by delivering lectures beyond the syllabus, arranging expert lectures, value added courses, industrial training, internship etc.<br></br> <br></br> Our placement records have always been very impressive, with the large number of students being placed year after year in highly reputed core companies and public sector units. Our alumni hold senior positions in industries as well as in academic institutions, both in India and abroad. The research work forms the department is contributing strongly across several disciplines that include Machine Learning, Big Data, Software Engineering and IOT. <br></br> <br></br>The department have RTU recognized Centre of Excellence in Artificial Intelligence and Big Data. The Department exhilarate students to get registered in variety of courses offered by online portals such as NPTEL, Swayam, Microsoft, Coursera, etc.",

      department: "Department of Computer Engineering",
      program: "B.tech. (Computer Engineering)",
      Intake2020: 500,
      Intake2021: 500,
      Intake2022: 500,
    },
    // first year
    {
      url: "/departments/first-year",
      deptHeading: "first year",
      mainImg: "",
      deptContent: "computer this",
      vision: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      mission: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      deptImage1: "",
      deptImage2: "",
      deptImage3: "",
      deptImage4: "",
      deptImage5: "",

      hodName: "Dr. Nikita Jain",
      hodDept: "HOD Computer Engineering",
      hodMsg:
        "A hearty welcome to the Department of Computer Engineering at Poornima college of Engineering, Jaipur. We are dedicated to providing not only the technical education to our students but also the leadership skills through which they can produce employment to others. The department offers graduate program B. Tech in Computer Engineering and B. Tech in CSE (Regional language), enriched in core learning, challenges and opportunities. The department’s major force is a team of well-qualified and dedicated faculty members that permanently support students for their academic excellence and instil a spirit of Team-Work in them. It is our major responsibility to keep our students committed not only to technical education but also to their self-reflection and critical thinking and to meet the expectations of the industries.\n <br></br> The teaching module comprises lectures, tutorials and practical. The methodology adopted in the classroom learning is based on application of innovative techniques, regular coursework and relations between teachers and students. <br></br> <br></br>Our department is also emphasis to identify the course outcomes for their subjects and perform mapping with POs, PEOs and PSOs and needs to fulfil the identified curricular gaps for the attainment of POs and PSOs by delivering lectures beyond the syllabus, arranging expert lectures, value added courses, industrial training, internship etc.<br></br> <br></br> Our placement records have always been very impressive, with the large number of students being placed year after year in highly reputed core companies and public sector units. Our alumni hold senior positions in industries as well as in academic institutions, both in India and abroad. The research work forms the department is contributing strongly across several disciplines that include Machine Learning, Big Data, Software Engineering and IOT. <br></br> <br></br>The department have RTU recognized Centre of Excellence in Artificial Intelligence and Big Data. The Department exhilarate students to get registered in variety of courses offered by online portals such as NPTEL, Swayam, Microsoft, Coursera, etc.",

      department: "Department of Computer Engineering",
      program: "B.tech. (Computer Engineering)",
      Intake2020: 500,
      Intake2021: 500,
      Intake2022: 500,
    },
    // Information Technology
    {
      url: "/departments/information-technology",
      deptHeading: "Information Technology",
      mainImg: "",
      deptContent: "computer this",
      vision: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      mission: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      deptImage1: "",
      deptImage2: "",
      deptImage3: "",
      deptImage4: "",
      deptImage5: "",

      hodName: "Dr. Nikita Jain",
      hodDept: "HOD Computer Engineering",
      hodMsg:
        "A hearty welcome to the Department of Computer Engineering at Poornima college of Engineering, Jaipur. We are dedicated to providing not only the technical education to our students but also the leadership skills through which they can produce employment to others. The department offers graduate program B. Tech in Computer Engineering and B. Tech in CSE (Regional language), enriched in core learning, challenges and opportunities. The department’s major force is a team of well-qualified and dedicated faculty members that permanently support students for their academic excellence and instil a spirit of Team-Work in them. It is our major responsibility to keep our students committed not only to technical education but also to their self-reflection and critical thinking and to meet the expectations of the industries.\n <br></br> The teaching module comprises lectures, tutorials and practical. The methodology adopted in the classroom learning is based on application of innovative techniques, regular coursework and relations between teachers and students. <br></br> <br></br>Our department is also emphasis to identify the course outcomes for their subjects and perform mapping with POs, PEOs and PSOs and needs to fulfil the identified curricular gaps for the attainment of POs and PSOs by delivering lectures beyond the syllabus, arranging expert lectures, value added courses, industrial training, internship etc.<br></br> <br></br> Our placement records have always been very impressive, with the large number of students being placed year after year in highly reputed core companies and public sector units. Our alumni hold senior positions in industries as well as in academic institutions, both in India and abroad. The research work forms the department is contributing strongly across several disciplines that include Machine Learning, Big Data, Software Engineering and IOT. <br></br> <br></br>The department have RTU recognized Centre of Excellence in Artificial Intelligence and Big Data. The Department exhilarate students to get registered in variety of courses offered by online portals such as NPTEL, Swayam, Microsoft, Coursera, etc.",

      department: "Department of Computer Engineering",
      program: "B.tech. (Computer Engineering)",
      Intake2020: 500,
      Intake2021: 500,
      Intake2022: 500,
    },

    // Mechnical Engineering
    {
      url: "/departments/mechanical-engineering",
      deptHeading: "Mechanical Engineering",
      mainImg: "",
      deptContent: "computer this",
      vision: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      mission: [
        {
          point:
            "Evolve as a center of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
        {
          point: "this is point 2",
        },
        {
          point: "this is point 3",
        },
      ],
      deptImage1: "",
      deptImage2: "",
      deptImage3: "",
      deptImage4: "",
      deptImage5: "",

      hodName: "Dr. Nikita Jain",
      hodDept: "HOD Computer Engineering",
      hodMsg:
        "A hearty welcome to the Department of Computer Engineering at Poornima college of Engineering, Jaipur. We are dedicated to providing not only the technical education to our students but also the leadership skills through which they can produce employment to others. The department offers graduate program B. Tech in Computer Engineering and B. Tech in CSE (Regional language), enriched in core learning, challenges and opportunities. The department’s major force is a team of well-qualified and dedicated faculty members that permanently support students for their academic excellence and instil a spirit of Team-Work in them. It is our major responsibility to keep our students committed not only to technical education but also to their self-reflection and critical thinking and to meet the expectations of the industries.\n <br></br> The teaching module comprises lectures, tutorials and practical. The methodology adopted in the classroom learning is based on application of innovative techniques, regular coursework and relations between teachers and students. <br></br> <br></br>Our department is also emphasis to identify the course outcomes for their subjects and perform mapping with POs, PEOs and PSOs and needs to fulfil the identified curricular gaps for the attainment of POs and PSOs by delivering lectures beyond the syllabus, arranging expert lectures, value added courses, industrial training, internship etc.<br></br> <br></br> Our placement records have always been very impressive, with the large number of students being placed year after year in highly reputed core companies and public sector units. Our alumni hold senior positions in industries as well as in academic institutions, both in India and abroad. The research work forms the department is contributing strongly across several disciplines that include Machine Learning, Big Data, Software Engineering and IOT. <br></br> <br></br>The department have RTU recognized Centre of Excellence in Artificial Intelligence and Big Data. The Department exhilarate students to get registered in variety of courses offered by online portals such as NPTEL, Swayam, Microsoft, Coursera, etc.",

      department: "Department of Computer Engineering",
      program: "B.tech. (Computer Engineering)",
      Intake2020: 500,
      Intake2021: 500,
      Intake2022: 500,
    },
  ];
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
              <div
                className="hod__section__content"
                dangerouslySetInnerHTML={{ __html: department.hodMsg }}></div>
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
