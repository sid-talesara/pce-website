import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} className="footer">
        <Grid item lg={3} sm={8} md={4}>
          <div className="contact_details">
            <h3>CONTACT US</h3>
            <h5>
              Poorima College of Engineering, <br />
              ISI-6 RIICO Institutional Area, <br />
              Sitapura, Jaipur,Rajasthan 302022
            </h5>

            <div className="contact_details_bottom">
              <div className="icon_container">
                <MailIcon className="icon" />
                <p>info.pce@poornima.org</p>
              </div>
              <div className="icon_container">
                {" "}
                <PhoneIcon className="icon" />
                <div>
                  <p>+91 9829255102</p>
                  <p>0141-2770790</p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} sm={8} md={4}>
          <div className="quick_links_container">
            <h3>QUICK LINKS</h3>
            <div className="socialMedia_links">
              <FacebookIcon className="icon" />
              <TwitterIcon className="icon" />
              <YouTubeIcon className="icon" />
              <LinkedInIcon className="icon" />
              <InstagramIcon className="icon" />
            </div>
          </div>
        </Grid>
        <Grid item lg={3} sm={8} md={4}>
          <div className="contact_form_container">
            <h3>CONTACT FORM</h3>
            <div className="contact_form">
              <div className="fullname">
                <input type="text" placeholder="Name" className="inputfield" />
                <input
                  type="number"
                  placeholder="Phone"
                  className="inputfield"
                />
              </div>
              <input type="email" placeholder="Email" className="inputfield" />
              <textarea
                type="text"
                placeholder="Message"
                aria-multiline
                className="Message_textarea"
              />
              <button
                className="submitbtn"
                type="submit"
                onClick={(e) => handleSubmit(e)}>
                Sumbit
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
