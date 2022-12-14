import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const Gallery = () => {
  const galeryData = [
    {
      url: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=612x612&w=0&k=20&c=rHE4_H7HKuV-YMt5qJgKuQXmwoP_2-tu06ytyVQEbwA=",
      text: "Sports",
      content: "",
    },
    {
      url: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=612x612&w=0&k=20&c=rHE4_H7HKuV-YMt5qJgKuQXmwoP_2-tu06ytyVQEbwA=",
      text: "Hostel",
      content: "",
    },
    {
      url: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=612x612&w=0&k=20&c=rHE4_H7HKuV-YMt5qJgKuQXmwoP_2-tu06ytyVQEbwA=",
      text: "Gym",
      content:
        "Multi facility gym for every hostel campus has been provided which is fully equipped to keep the students fit and healthy.",
    },
    {
      url: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=612x612&w=0&k=20&c=rHE4_H7HKuV-YMt5qJgKuQXmwoP_2-tu06ytyVQEbwA=",
      text: "Digital Library",
      content: "",
    },
    {
      url: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=612x612&w=0&k=20&c=rHE4_H7HKuV-YMt5qJgKuQXmwoP_2-tu06ytyVQEbwA=",
      text: "Mess & Canteen",
      content:
        "Canteen: 200 Students Mess: 500 Students Kitchen equipped with chapatti maker machine, deep freezer, grinder and other modern kitchen aids.The College Campus offers an excellent choice of food to eat. Each campus houses a Campus Canteen, which offer delicious food, superior services with innovative practices.The eating joints offer excellent multi-cuisine menus ranging from Indian to Continental and Chinese in a comfortable and vibrant ambience.One can find enormous range of recipes from pizza to idli-sambhar or even the spicy parathas and bhel puri as well as varied range of sandwiches, snaks, fresh fruits, cakes etc.Wide variety of fresh juices, cold coffee, milk shakes, and other beverages are also available.Apart from providing places where one can eat and enjoy, the eating joints also help to provide hands-on experience and entrepreneurial opportunities to the budding entrepreneurs at Poornima college of engineering by giving them opportunity to manage and run some of these eating joints independently as well as under some guidance.",
    },
    {
      url: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=612x612&w=0&k=20&c=rHE4_H7HKuV-YMt5qJgKuQXmwoP_2-tu06ytyVQEbwA=",
      text: "Provisional Store",
      content: "",
    },
    {
      url: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=612x612&w=0&k=20&c=rHE4_H7HKuV-YMt5qJgKuQXmwoP_2-tu06ytyVQEbwA=",
      text: "Transport",
      content:
        "Biggest fleet of 26 new Swaraj Mazda buses operating from all corners of Jaipur owned by Shanti Education Society.Well coordinated, time bounded and regular service available throughout the year.Separate buses for staff and students.Bus facility for Industrial visit.Bus facility to take students to examination centers.Full provision of back up service to avoid any breakdown.Free Transport facility to employees.",
    },
    {
      url: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=612x612&w=0&k=20&c=rHE4_H7HKuV-YMt5qJgKuQXmwoP_2-tu06ytyVQEbwA=",
      text: "Infirmary",
      content:
        "MOU with MGH for all medical facilities (0.5 km far from institute Equipped Medical Room Dedicated vehicle in campus Routine checkup by Medical practitioner (Dr. Pawan Sharma)",
    },
    {
      url: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=612x612&w=0&k=20&c=rHE4_H7HKuV-YMt5qJgKuQXmwoP_2-tu06ytyVQEbwA=",
      text: "Laboratory",
      content:
        "It’s a part of academics where all facilities are provided with updated technologies and equipments. The significance of R&D can be highlighted as: To promote research and development activities in the institution.To equip the students and the faculty members with latest advancement in the technological areas.To provide engineering consultancy and research in innovative areas.To enhance the engineering education with research orientation fulfilling the technical needs of industries.",
    },
    {
      url: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=612x612&w=0&k=20&c=rHE4_H7HKuV-YMt5qJgKuQXmwoP_2-tu06ytyVQEbwA=",
      text: "Recreation Facility",
      content: "",
    },
    {
      url: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=612x612&w=0&k=20&c=rHE4_H7HKuV-YMt5qJgKuQXmwoP_2-tu06ytyVQEbwA=",
      text: "Laboratory",
      content:
        "It’s a part of academics where all facilities are provided with updated technologies and equipments. The significance of R&D can be highlighted as: To promote research and development activities in the institution.To equip the students and the faculty members with latest advancement in the technological areas.To provide engineering consultancy and research in innovative areas.To enhance the engineering education with research orientation fulfilling the technical needs of industries.",
    },
    {
      url: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=612x612&w=0&k=20&c=rHE4_H7HKuV-YMt5qJgKuQXmwoP_2-tu06ytyVQEbwA=",
      text: "Recreation Facility",
      content: "",
    },
  ];
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className="girdContainer">
        <h1 className="primary_heading">Photo Gallery</h1>
        <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} justify="center">
          {galeryData.map((data, i) => {
            return (
              <>
                <Grid item md={4} sm={4} xs={6} key={i}>
                  <div className="photo_container">
                    <img src={data.url} alt={data.text} />
                    <div className="photo_description">{data.text}</div>
                  </div>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Gallery;
