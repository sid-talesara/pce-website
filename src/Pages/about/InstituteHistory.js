import React from "react";

// images
// import image from "../../Assets/images/bird.jpg";
const image = "";
const History = () => {
  return (
    <div className="history__wrap ">
      <img src={image} alt="" className="slider" />
      <div className="history row">
        <h1 className="history__heading">History of Poornima</h1>
        <p className="history__content">
          Poornima College of Engineering (PCE) started its journey in the year
          2000. PCE came into existence with the aim of promoting quality in
          professional & technical education and today it is the most reputed
          college engaged in higher and technical education in Jaipur,
          Rajasthan. Poornima College of Engineering is promoted by the Shanti
          Education Society (SES) which came into existence in the year 1999 by
          registering under Rajasthan Societies Act. The Founder Chairman of SES
          is Shri. Manohar Lal Singhi & Founder and Vice Chairman is Late Shri
          Arun Chandra Singhi. The main objective of SES is to promote Technical
          & Professional Education in the state of Rajasthan with state of art
          infrastructure and strong academic philosophy. Its secretary, Ar.
          Shashikant Singhi, who has been a noted practitioner of Architecture
          and technocrat of repute, presently manages Society and its
          constituent institutions. Other members of society are well-known
          professionals. <br />
          Under the mentorship of Dr. S.M. Seth Chairman (Emeritus) founder
          Principal, Poornima College of Engineering has emerged as one of the
          most preferred engineering colleges among all the colleges in Jaipur
          and admission seekers in Rajasthan. This has been evident from the
          choices exercised by students choosing between a variety of top
          colleges and institutes in Jaipur, year after year. Replete with
          modern education infrastructure, Poornima College of Engineering is
          spread over 52,500 square meters of constructed area. Approximately
          3,700 students are enrolled here and over 1300 students reside in
          hostels.
          <br />
          Poornima College of Engineering has a very strong research orientation
          and culture. What sets apart Poornima College of Engineering from
          other colleges in Jaipur, is its commitment to high-quality and
          industry-recognized delivery of education. Ensuring cultural and
          social enrichment of its students, PCE successfully tops the list of
          the top institutes in Jaipur. Poornima brand symbolizes excellence
          through innovations, reliability, transparency, and professionalism of
          the highest order and instills faith and confidence among all members
          concerned in India and abroad.
        </p>

        <div className="history__imagesWrap">
          <img src={image} alt="" className="historys-images image1" />
          <img src={image} alt="" className="historys-images image2" />
          <img src={image} alt="" className="historys-images image3" />
        </div>
      </div>
    </div>
  );
};

export default History;
