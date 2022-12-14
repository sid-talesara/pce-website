// react files
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Department = () => {
  const { id } = useParams();
  const url = `/departments/${id}`;
  const DepartmentData = [
    // computer engineering
    {
      url: "/department/computer-engineering",
      deptHeading: "About the Department of Computer Engineering",
      deptContent:
        "Computer Engineering combines the academic disciplines of electronics engineering and computer sciences which helps our engineering graduates to combine their understanding of computer hardware and software to innovate the stream. Computer engineering programmes prepare graduates for highly valued, sky-high careers in design, development, research and testing of various hardware and software.The department focuses not only on the theoretical aspects but emphasize the overall development of the students. It conducts various co-curricular activities such as informative workshops and industrial visits to companies. It makes the student industry ready with all practical exposer, expert talks on new technologies, technical events like coding competition, hackathon, etc. We believe, such activities help them to meet the demands of Industry or existing market.",
      deptImage1: image,
      vision: [
        {
          point:"Evolve as a centre of excellence with wider recognition and to adapt the rapid innovation in Computer Engineering.",
        },
       
      ],
      mission: [
    
        {
          point:"[1]	To provide a learning-centered environment that will enable students and faculty members to achieve their goals empowering them to compete globally for the most desirable careers in academia and industry.  ",
        },
        {
          point: "[2]	To contribute significantly to the research and the discovery of new arenas of knowledge and methods in the rapid developing field of Computer Engineering",
        },
        {
          point: "[3]	To support society through participation and transfer of advanced technology from one sector to another.",
        },
      ],
      deptImage2: image,
      deptImage3: image,
      deptImage4: image,
      deptImage5: image,

      hodName: "Dr. Nikita Jain",
      hodDept: "HOD Computer Engineering",
      hodMsg:
        "A hearty welcome to the Department of Computer Engineering at Poornima college of Engineering, Jaipur. We are dedicated to providing not only the technical education to our students but also the leadership skills through which they can produce employment to others. The department offers graduate program B. Tech. in Computer Engineering and B. Tech. in CE (Regional language), enriched in core learning, challenges and opportunities.The department’s major force is a team of well-qualified and dedicated faculty members that permanently support students for their academic excellence and instil a spirit of Team-Work in them. It is our major responsibility to keep our students committed not only to technical education but also to their self-reflection and critical thinking and to meet the expectations of the industries.The teaching module comprises lectures, tutorials and practical. The methodology adopted in the classroom learning is based on application of innovative techniques, regular coursework and relations between teachers and students. Our department is also emphasis to identify the course outcomes for their subjects and perform mapping with POs, PEOs and PSOs and needs to fulfil the identified curricular gaps for the attainment of POs and PSOs by delivering lectures beyond the syllabus, arranging expert lectures, value added courses, industrial training, internship etc. Our placement records have always been very impressive, with the large number of students being placed year after year in highly reputed core companies and public sector units. Our alumni hold senior positions in industries as well as in academic institutions, both in India and abroad. The research work forms the department is contributing strongly across several disciplines that include Machine Learning, Big Data, Software Engineering and IoT.        The department have RTU recognized Centre of Excellence in Artificial Intelligence and Big Data. The Department exhilarate students to get registered in variety of courses offered by online portals such as NPTEL, Swayam, Microsoft, Coursera, etc. Best Wishes.",

      department: "Department of Computer Engineering",
      program: "B. Tech.(Computer Engineering)",
      Intake2020: "180",
      Intake2021: "180+60*=240",
      Intake2022: "180+60*=240",
    },

    // Advance computing
    {
      url: "/department/advance-computing",
      deptHeading: "About the Department of Advance Computing",
      mainImg: image,
      deptContent:
        "The Department of Advanced Computing offers B. Tech. degree in three programs. These programs are Computer Sc. & Engineering (Artificial Intelligence), Artificial Intelligence (AI) & Data Science, and Computer Sc. & Engineering (Cyber Security). The faculty is determined and dedicated to ensure that their potential is utilized in preparing globally competent Engineers. To achieve this various curricular and co-curricular activities like expert lectures, workshops, conferences and STTPs are organized in the department. The department is well equipped with state of art laboratories and ICT enabled lecture rooms. To prepare industry ready students various activities like Campus Recruitment Training (CRT), Industry Institute Interaction (i3) Day and Non Syllabus Projects (NSP) are conducted in the department.",
      vision: [
        {
          point:"Become most preferred department for the latest advanced computing programs through creating appropriate teaching-learning and skill up gradation environment that fulfill current industry needs.",
        },
        
      ],
      mission: [
        {
          point:"[1] To create experiential learning environment that will enable students to compete globally in advanced computing domain.",
        },
        {
          point: "[2]	To adapt latest technological tools and contribute significantly for the advancement of knowledge in computer engineering application in industry, society and environment.",
        },
        {
          point:" [3]	To inculcate essential characteristic in the students for their all-round professional development, interaction with industry and society and lifelong learning.",
        },
        {
          point:"[4]	To create R & D infrastructure and centre of excellence in various advanced computing sub domains. "
        }
      ],
      deptImage1: image,
      deptImage2: image,
      deptImage3: image,
      deptImage4: image,
      deptImage5: image,

      hodName: "Dr. Mithlesh Arya",
      hodDept: "Department of Advanced Computing",
      hodMsg:
        "The adoption of Artificial Intelligence/Data Science (AI/DS) is growing worldwide. Organizations worldwide are adopting AI/DS in their business transformation journey for agility, resilience, innovations, and scalability. So, the Department of Advanced Computing offers a range of innovatively designed programs namely Computer Sc. & Engineering (Artificial Intelligence), Artificial Intelligence (AI) & Data Science, and Computer Sc. & Engineering (Cyber Security). The department was established in the year 2021-22. These programs are approved by AICTE and affiliated to Rajasthan Technology, Kota.The main goal of the Department is to provide an experiential learning opportunities such as hands-on training, project-based courses, research projects, and internships which provide a solid foundation to work in interdisciplinary teams that invent the future of the students. The Department also covers a wide spectrum of research in the areas of Algorithms, Artificial Intelligence, Image Processing, Machine Learning, Data Mining, Big-Data Analytics, and Computer Security led by qualified and experienced team of faculty members. We the students, faculty, and staff of Advance Computing believe in working together, we encourage each other, we help each other, and, most importantly, we believe in each other and this is the key to make our students successful. Hence, to bring the success of the department we focus on productive interdisciplinary collaborations to work across a diverse set of projects, laboratories, departments, and industry partners.The motto of the department is to provide quality technical education to make the students industry-ready. Our goal is to ensure that our engineering graduates are well prepared to play the roles of problem solvers, project leaders, entrepreneurs, and above all ethical citizens of a global society. I am confident that the Department of Advanced Computing is strongly prepared to face the new exciting challenges in this new digital era.",

      department: "Department of Advanced Computing",
      program: "B.tech. (Department of Advanced Computing)",
      Intake2020: "",
      Intake2021: "180",
      Intake2022: "180",
    },
      // civil Department
      {
        url: "/department/civil-engineering",
        deptHeading: "About the Department of Civil Engineering",
        mainImg: image,
        deptContent:
          "The Department of Civil Engineering of PCE came into existence in the year 2011 with an alignment of the department’s evolution with key events and technological advances for the betterment of the society and nation. At present, it has the intake of 60 students providing all the amenities of infrastructure related to knowledge, research, experiments and training. Poornima believes that Civil Engineering is evergreen branch in the engineering profession. Therefore, the department of Civil Engineering has renowned scholars as the faculty members for imparting the knowledge. It has been taking initiatives for the versatile enhancement of the students through the technical, cultural and sports fests since its establishment.",
        vision: [
          {
            point:"To become a globally recognized centre of civil engineering through excellence in technical education, interdisciplinary research and innovation.",
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
            point:"[1]	To develop the professional skills with outstanding knowledge.",
          },
          {
            point: "[2]	To enhance research & development in emerging areas of civil engineering.",
          },
          {
            point: "[3]	Enhancing linkages with alumni and industry.",
          },
          {
            point: "[4]	To produce ethically able, humane and creative global leaders.",
          }
        ],
        deptImage1: image,
        deptImage2: image,
        deptImage3: image,
        deptImage4: image,
        deptImage5: image,
  
        hodName: "Dr. Pran Nath Dadhich",
        hodDept: "HOD Department of Civil Engineering",
        hodMsg:
          "Welcome to the Department of Civil Engineering at Poornima College of Engineering. The work we do as practicing and future engineers is critical for an ever-changing world. Civil engineers design infrastructure that powers our modern society, such as roads, bridges, buildings, and water distribution systems. Our department offers the highest quality academic programs supported by world-class facilities. The Civil Engineering Department started in 2011. Over the years, the Department has grown many times in different spheres of activities. At present it offers B. Tech. (Civil Engineering) degree. The Department has 15 highly qualified and dedicated faculties who strive to produce competent professionals who are abreast with the latest technology and are equipped with enterprising skills necessary for a designer and also for a site engineer. In essence, Civil Engineering may be regarded as the profession that makes the world a more agreeable place in which to live. The laboratories of the Department are well equipped such as Fluid Mechanics, Environmental Engineering, Survey, Concrete Technology and Material Testing. The Department has been regularly conducting a number of short term training programs, Workshops, National and International Conferences to encourage research between student and faculty members of technical institutions and working professionals. The Department is also actively engaged in R&D, testing and consultancy activities.",
  
        department: "Department of Civil Engineering",
        program: "B.tech. ( Civil Engineering)",
        Intake2020: "60",
        Intake2021: "60",
        Intake2022: "60",
      },
        // Electrical Engineering
    {
      url: "/department/electrical-engineering",
      deptHeading: "About the Department of Electrical Engineering",
      mainImg: image,
      deptContent:
        "Welcome to the Department of Electrical Engineering at Poornima College of Engineering, Jaipur. Our Department started in the year of 2000. Over the years, we have grown our expertise and competence as per the government requirement in the core of Electrical Engineering and research. We are providing all the amenities of infrastructure related to knowledge, research, experiments and training of multiple professions. The industry-oriented undergraduate program in Electrical Engineering prepares the students as per the industrial expectations. The primary aim of our curriculum is to impart technical skills to students, promote their problem-solving skills and innovation of new technologies. Department offers large number of optional courses for providing wide spectrum of options to the students to pursue their interest. The course contents are periodically updated for introducing new scientific and technological developments. Undergraduate students are encouraged to start-up with the support of Innovation & Entrepreneurship Development Cell established in the campus. Our department maintains active research groups for carrying out collaborative and interdisciplinary research. We have state of the art research facilities to support our academic programs and research. This department has a distinguished record in both teaching and research. Faculty members have excellent academic credentials and are highly regarded in their respective research fields.The Electrical Engineering course deals with the various domains related to electrical engineering field. It includes Circuit Analysis, Electrical Machines & Drives, Power System Generation, Transmission, Distribution and Utilization, Control systems and its advancements, Power Electronics and its Applications etc. The course equips the graduates with the expertise required for the core industrial needs. Students will also be trained in various currents thrust areas of Electrical Engineering like Smart Grid and Automation, Renewable Energy and Intelligent Controllers. The department has been taking initiatives for versatile enhancement of the students through technical, cultural and sports fests since the establishment. Most of our final year students have been placed in Infosys, Capgemini India Ltd., FACE, Gram Power, Adani Power, KSTPS, Pinnacle Infotech solutions, etc.",
      vision: [
        {
          point:"To be a model of excellence in Professional Education and Research by creating electrical engineers who are prepared for lifelong engagement in the rapidly changing fields and technologies with the ability to work in team.",
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
          point:"[1]	To provide a dynamic environment of technical education wherein students learn in collaboration with others to develop knowledge of basic and engineering sciences.",
        },
        {
          point: "[2]	To identify and strengthen current thrust areas based upon informed perception of global societal issues in the electrical and allied branches.",
        },
        {
          point: "[3]	To develop human potential with intellectual capability who can become a good professional, researcher and lifelong learner.",
        },
      ],
      deptImage1: image,
      deptImage2: image,
      deptImage3: image,
      deptImage4: image,
      deptImage5: image,

      hodName: "Dr. Pravin M. Sonwane",
      hodDept: "HOD Electrical Engineering",
      hodMsg:
        "The department of Electrical Engineering under Poornima college of Engineering, Jaipur is established in the year 2000.  The department runs under graduate program B. Tech. (Electrical Engineering) to cater to the ever challenging needs of technical excellence in all areas of electrical engineering. The department has well qualified and committed faculties with specialization in the areas of Power Systems, Power Electronics, Electric Drives, Renewable Energy and Smart Grid Automation etc. to guide and mentor the students’ community. Department of Electrical Engineering is well equipped with the state of art equipment’s and Laboratories. Conducive environment exists in the department for both staff and students. Department is bound to impart knowledge in electrical engineering to develop professionals and leaders to meet the global challenges and to be socially responsible. For Encouragement of research and personal development of student, IEEE (USA) student chapter is established. The department provides high quality placements with the maximum salary package reaching to 12 LPA. The department equips the students with the required technical skills and knowledge required to face the real time professional challenges and also works on their overall personality development through various Professional Body activities and extra and co-curricular activities. The world is open for all the electrical engineers to pursue a career of their choice specifically in Govt. and Public sector. Collaboration with faculty members from other disciplines, both within and outside the institute, is encouraged. The research activity of the department includes fundamental research, sponsored and consultancy projects are carried out with active participation of the students, faculty, staff and research engineers.  The curriculum of the department is more students centric and focused on outcome based education (OBE) pattern, with a flexibility of modifying and updating the syllabi of the courses as per the need and requirements of the society/industry standards by informing to RTU Academic section. The infrastructure and lab facilities are upgraded from time to time and provide adequate opportunities for students and researchers to learn and innovate. In the changing scenario, nowadays expectations of industries are ever increasing. To bridge this gap and cater the needs of industries as well as make the students employable and industry ready, department in its curriculum has introduced minor courses and or MOOC Courses. We also encourage our students to learn foreign languages. This not only will help for the holistic development of the students, but also will bring an avenue to build-up a professional career in the corporate world. Department also has setup of 200KW “Solar Power Plant” in operation. “Center of Excellence” in the institute is most attractive place for the students who are interested in innovation and to showcase their skill. Department of Electrical Engineering is bound to organize workshops, FDP’s, tutorial sessions, Industry expert talk for the exponential development of our Poornima Students. In-order to gain an industrial exposure, internship to the students is made mandatory which definitely will prepare the students to be industry ready.  Only one piece of advice I would like to share: Success in life is not measured against having a hefty pay package, it is also in having a lovable family, faithful friends and a warm social circle. We should practice to live life sincerely and not seriously. With this, I would like to extend my heartfelt gratitude and best wishes to the entire fraternity and request every individual to be the part of our Poornima family.",

      department: "Department of Electrical Engineering",
      program: "B.tech. (Electrical Engineering)",
      Intake2020: "120",
      Intake2021: "30",
      Intake2022: "30",
    },
      // ECE
    {
      url: "/department/electronics-communication-engineering",
      deptHeading: "About the Department of Electronics & Communication Engineering",
      mainImg: image,
      deptContent:
        "Electronics and Communication Engineering has gained importance in recent years due to its versatile application in every facet of engineering field. It mainly deals with the principles of electronic devices and communication technologies along with the basic electronic components, design of circuits and systems. The branch also has very close link with the computer field.",
      vision: [
        {
          point:"To establish an acknowledged Department of academics in the field of Electronics and Communication Engineering",
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
          point:"[1]	To equip the students with strong foundations to enable them for continuing education in the field of Electronics and Communication Engineering. ",
        },
        {
          point: "[2]	To provide quality education & to make the students entrepreneur and employable. ",
        },
        {
          point: "[3]	To undertake research and development in the field of Electronics and Communication Engineering.",
        },
      ],
      deptImage1: image,
      deptImage2: image,
      deptImage3: image,
      deptImage4: image,
      deptImage5: image,

      hodName: "Dr. Garima Mathur",
      hodDept: "HOD Electronics & Communication Engineering",
      hodMsg:
        "A hearty welcome to the Department of Electronics and Communication Engineering at Poornima College of Engineering, Jaipur. The department vision is to be excellence in value based on Electronics & Communication Engineering Education. The department has well qualified and dedicated faculty. The department strives to impart knowledge and training of the highest standard. The objective of the department is to prepare students for a successful career in Industry, Research and Academics to meet the needs of growing technology. Our efforts are to develop the ability among students to synthesize data and technical concepts for application to product design. We provide an opportunity for students to work as members of a team on multidisciplinary projects .Electronics engineering department provides students with a sound foundation in the mathematical, scientific and engineering fundamentals necessary to formulate, solve and analyze engineering problems and to prepare them for higher studies as well as research. We promote student awareness for life-long learning and to introduce them to professional ethics and codes. Students are placed for training in the industry as per the curriculum of Rajasthan Technical University Kota. The student learns industrial practices and also professional ethics. For the overall development of the student; department of Electronics engineering is associated with memberships of professional bodies such as IEEE, IETE and IET. We conduct various activities of these chapters provide student to gain knowledge and interact with students and staff of other colleges/universities as well as Industry Engineers. Students have taken part in various competitions and won prizes. Students of Electronics department also bagged prizes in academics as well in co-curricular activities. Students secured a gold medal at university level examinations. Students showcase their talent in various sports and intercollegiate technical events and bag prizes. Our graduates are working in Multinational Companies, Defense Services, and Academic Institutions in India and abroad. Last but not least our Technical supporting staff is unique in its own way. Students, as well as visitors, find them very friendly, amicable and highly intelligent! Best wishes",

      department: "Department of Electronics & Communication Engineering",
      program: "B.tech. (Electronics & Communication Engineering)",
      Intake2020: "120",
      Intake2021: "30",
      Intake2022: "30",
    },
      // first year 
      {
        url: "/department/first-year",
        deptHeading: "About the Department of First Year",
        mainImg: image,
        deptContent:
          "The Department of First Year in PCE is committed for imparting the students the basic knowledge required to pursue their engineering education and is established in 2000 till date and currently take pride in educating over 840 students spread among 9 sections comprises of CS, IT, ECE, EE, CIVIL and ME. The framework of the department provides ample opportunities to the students to train and excel themselves as researcher, thinker, job-seeker, entrepreneur, or innovator based on their passion. We focus on quality of teaching, learning and innovation to develop competent engineers with professional, analytical skills and ethical values. To strengthen the graduate attributes we have designed the curriculum in line with the staff of 34 faculties with the supporting staff of 10. 15 numbers of laboratories were also introduced along with the 8 lecture halls having the sitting of 50+ students at a time and 2 tutorial classes for the students of first year department.Club activity is an integral part of First Year which comprises of 2 clubs namely Literary Club and Zircon Club. These Clubs are coordinated by young and Energetic student Coordinators. First Year students also participate in Club activities that are targeted to provide overall personality development in order to make them Industry ready. The Department of First Year is an indispensable part of PCE. It has ever played the role of foundation and building block of PCE which prepares the neophytes to cope with the atmosphere of an Engineering institution by including a scientific temperament in them. Like Ever the department has played an essential role and shown the zeal and efforts to uplift the nation builders. Here the faculty members are gal oriented and completely dedicated towards their aim. The Department of First Year is very strict in terms of Uniform, attendance, mid-term exams and all other special activities. Beyond the academics, the Department also emphasizes in Non-Syllabus Projects which helps the students to expand not only non-technical skills, but also professional attributes like team work, communication skills, critical thinking, presentation skills, and also most importantly, the hands on experience with the project based environment.The strictness shown by the faculty members helps the budding technocrats to prepare themselves to be good future engineers. The department has organized many activities for the whole year for the complete development of the students. The department organizes many competitions after certain interval to raise the talent of the students and make them compete in this global world. We also organize many activities to make the students aware about the personality. The communication lab also takes a great care of the students. Here the students rigorously practice on spoken English and do various workouts to groom their personality. Thus the Department of First Year works well to give its contribution in form of Better Future Engineers.",
        vision: [
          {
            point:"",
          },
          {
            point: "",
          },
          {
            point: "",
          },
        ],
        mission: [
          {
            point:"",
          },
          {
            point: "",
          },
          {
            point: "",
          },
        ],
        deptImage1: image,
        deptImage2: image,
        deptImage3: image,
        deptImage4: image,
        deptImage5: image,
  
        hodName: "Dr. Rekha Nair",
        hodDept: "HOD Department of First Year",
        hodMsg:
          "With great pleasure I introduce the Department of First Year, Poornima College of Engineering. The department nurtures and moulds the students to enter in the fast changing pragmatic world yet maintaining the sensitivity in them. The Department of First Year, established in 2001, is one of the most dynamic departments of Poornima Group. The department has consistently maintained an exemplary academic and research record. I am really elated to tell you that the department stands on the strength of experienced and well qualified faculty members who are very dedicated to teaching and also involved in up-gradation of knowledge. Their research experience also helps to cultivate the future of our students. With great demand in industry and great placement opportunities, the department stands tall and proud. Department works for the technical and nontechnical skills of the students through various programs where they groom their communication skills, personality and technical skills. Department organizes a 3-weeks student induction program as per guidelines of AICTE every year for the smooth transition of students to college life. Department initiates technical projects and industrial visits to inculcate professionalism in its students. Speakers from reputed industry and academia impart their knowledge through various sessions for the overall growth and development of students. The department offers and organizes various events like AADHAR (Technical Project Competition) and AAROHAN (Techno-Cultural Fest) to provide a platform to its students to showcase their talent and upgrade their skills. I believe that my team of students, staff and faculty members are capable of doing wonders. I am happy to see the amount of enthusiasm of eminent members of the college for their contribution in the department. Not to be outdone, our students have devoted time and plunged into creating powerful stories, heart-warming poems, vivid drawings and informative articles. This shows the positive and creative energy of faculty members and students present in the college. We proudly publish the Annual college magazine in order to show to the outside world, and also to remind the denizens of PCE, the progress we have made so far. We intend to continue presenting the talent and creativity of our staff and students through Dazzle every year. I invite you to read and immerse yourself in the unfolding art and be exalted.",
  
        department: "Department of First Year",
        program: "B.tech. (of First Year)",
        Intake2020: 500,
        Intake2021: 500,
        Intake2022: 500,
      },
        // Information Technology
    {
      url: "/department/information-technology",
      deptHeading: "About the Department of Information Technology",
      mainImg: image,
      deptContent:
        "The Department of Information Technology was established in year 2001. The department is considered one of the vibrant departments of the college as far as results and placements are concerned. The study of Information Technology basically deals with application of computational technologies for storage, retrieval, transmission and manipulation of the information which is a processed data. Both software and hardware sectors are parts of Information Technology. Due to the importance and reputation of IT, the present age is sometimes referred to as information technology age. The Department caters to the current needs of undergraduate engineering program (B. Tech.) in Information Technology by providing state of art infrastructure. The Department aims to provide both theoretical as well as practical know-how to its students and make them employable and ready for industry intake. The department has produced excellent IT engineers who are serving in different reputed organizations and pursuing higher studies at institutes of excellence. The students of the department are exposed to hands on experiments in areas like data structures, object-oriented systems, programming languages, DBMS, Computer Networks, Operating Systems, Analysis of Algorithms, Digital Hardware Design, data mining and warehousing, software testing and other field in Information Technology. The class lectures, laboratory experiments and student projects prepare the students for a career in software industry and for future post graduate studies. The department has very close interaction with local and national industries and their inputs are taken into consideration to give value additions to our programs such as seminars, projects, various workshops and training programs. Different syllabus and non-syllabus activities like projects, seminars, educational visits, expert lectures, technical workshops etc. are regularly organized by the department for continuous growth of its students. We are also engaged with many external collaborations which keep our faculties up-to-date about the industrial requirements and facilitate delivering most relevant lectures/practical and tutorials. The faculty members regularly participate in workshops/ seminars and training programs organized within and outside the college for up gradation of knowledge and to keep-up with the pace of global competition. Spoken Tutorial programs of IIT Bombay are organized in which workshops and certification exams on Open Source Software are conducted for students. Infosys Campus Connect foundation program which is a part of industry-institute interaction is successfully conducted for III- and IV-year students, under which different focus areas are dealt by senior faculty members of the department. Three industry-oriented courses on IBM emerging technologies namely IBM Bluemix for Cloud, IBM Cognos for Business Intelligence and IOT are being run in the college under IBM Career Education Programs.Faculty members are engaged actively in research work in various focus areas of their interest like algorithms, databases and data mining, big data analytics, network security, artificial intelligence, IoT, SDN and publishing papers in National and International conferences and indexed journals. Students have also chosen their technical focus areas and building up their knowledge and expertise in that direction by attending relevant workshops, seminars, conferences and developing small projects under faculty guidance. Teaching and research apart, faculty is involved in counseling and career guidance of students. The students also undertake quality projects and publish papers at various prestigious conferences, paper presentation and design contests under the guidance of faculty members. Students of the department have excelled in their assignments in different organizations over the years. This fact is substantiated by the excellent placement records and the fact that large numbers of prestigious multinational companies are visiting the college for placements. The department has strong alumni network, many of whom are serving on influential positions in multinational IT industry, academia, Govt. and public sectors.",
      vision: [
        {
          point:"To attain distinction in education to enable students for their establishment as globally competent professional and empowering them with proficiency, knowledge and research ability required to be successful in field of Information Technology.",
        },
      
      ],
      mission: [
        {
          point:"[1]	To provide state-of-the-art facilities with modern IT tools to students and faculty thereby enabling them to develop sustainable solutions for real world problems. ",
        },
        {
          point: "[2]	To create and propagate knowledge in field of Information Technology through research, teaching and learning for meeting societal challenges.",
        },
        {
          point: "[3]	To inculcate analytical, leadership and team working skills with ethical behavior in students and provide an environment for continuous learning.",
        },
      ],
      deptImage1: image,
      deptImage2: image,
      deptImage3: image,
      deptImage4: image,
      deptImage5: image,

      hodName: "Dr. Gajendra Singh Rajawat",
      hodDept: "HOD  Information Technology",
      hodMsg:
        "The need for professionals with a background of Information Technology is always on the rise. The primary focus of the department is to empower its students with overall development and necessary skills to meet academic and industry needs. Department provides a platform for the students to enhance their employability skills through various training programs and industry institute collaboration. Department has well qualified faculty and state-of-the-art facilities to provide quality education to students that match global standards with an academic ambiance of excellence. The faculty members are engaged in research and development activities, and regularly participate in conferences, seminars, and faculty development programs within and outside the college through a well-supported system. As per college’s vision plan the faculty members and the students are strengthening knowledge and skills in the direction of their technical focus areas by taking part in different technical activities like workshops, conferences etc. organized within and outside the college. We are confident that our students will be regarded as assets to the organizations they serve in future.",

      department: "Department of  Information Technology",
      program: "B.tech. ( Information Technology)",
      Intake2020: "60",
      Intake2021: "60",
      Intake2022: "60",
    },

    // Mechnical Engineering
      {
        url: "/department/mechnical-engineering",
        deptHeading: "About the Department of Mechanical Engineering",
        mainImg: image,
        deptContent:
          "The Department of Mechanical Engineering is established in 2004 at Poornima College of Engineering, Jaipur. The curricular, co-curricular and extracurricular activities provide exposure to students and faculty members in the areas of latest developments; therefore, students of mechanical engineering department are associated with renowned organization throughout the world. The laboratories of department are equipped with modern and latest instruments. The department organize Seminars, national and international conferences, workshops, and symposia in collaboration with well reputed organization. The department also organize special lectures in various areas by invited speakers from IITs, foreign universities, and expert from industries. There is no barriers between the students, faculty and department administration which makes us as united community.",
        vision: [
          {
            point:"To be recognized for quality education in the field of Mechanical Engineering and identified for its innovation & excellence.",
          },
        
        ],
        mission: [
          {
            point:"[1]	To provide education that transforms students through rigorous teaching and thought process to fulfill the needs of the society and industry",
          },
          {
            point: "[2]	To collaborate with leading industry partners and other academic & research institutes around the world to strengthen the education and research ecosystem.",
          },
          {
            point: "[3]	To prepare students with life-long learning for their career by fostering in them the ethical & technical capabilities pertinent to mechanical & allied engineering.",
          },
        ],
        deptImage1: image,
        deptImage2: image,
        deptImage3: image,
        deptImage4: image,
        deptImage5: image,
  
        hodName: "Dr. Narayan Lal Jain",
        hodDept: "HOD Mechanical Engineering",
        hodMsg:
          "Education is inward journey that gives a clear mind to face the word outside. Engineering graduates are to be trained to fit into the present-day industry’s need, as technologies progresses day by day and there is intense competition among young engineers. To achieve professional competence, engineers should be fully equipped with all basic principles of latest technology. To dream, to think and to achieve guided by this motive Mechanical Engineering Department of PCE is striving to pace ahead and touch the communication of development. Our extracurricular and supporting academic activities are also significant. These activities provide exposure to our students and faculty members in the areas of latest developments. We organize Seminars, national and international conferences, workshops, and symposia in collaboration with well reputed organization. We also organize special lectures in various areas by invited speakers from IITs, foreign universities, and expert from industries. There are no barriers between the students, faculty and department administration which makes us as united community.",
  
        department: "Department of  Mechanical Engineering",
        program: "B.tech. ( Mechanical Engineering)",
        Intake2020: "120",
        Intake2021: "30",
        Intake2022: "30",
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
