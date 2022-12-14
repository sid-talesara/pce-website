import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PCE_logo from "../Assets/PCE_logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [activeNavigation, setActiveNavigation] = useState("Home");
  const [drawer, showDrawer] = useState(false);
  const [MobileDrawerContent, showMobileDrawerContent] = useState("");

  const topNavigation = [
    { value: "Gallery", route: "/gallery" },
    {
      value: "Alumni",
      url: "http://pcas.poornima.org/",
    },
    { value: "Library", url: "http://pcelibrary.poornima.org/" },
    { value: "Coverage", route: "/gallery" },
    { value: "Syllabus", url: " https://www.rtu.ac.in/RTU/b-tech-2012-13" },
    { value: "Downloads", route: "/downloads" },
    {
      value: "IEEE_Xplore",
      url: "https://ieeexplore.ieee.org/Xplore/home.jsp",
    },
    { value: "Contact", route: "/contact-us" },
  ];
  const bottomNavigation = [
    { value: "Home", dropdown: [], route: "/" },
    {
      value: "About Us",
      route: "",
      dropdown: [
        {
          value: "Institute History",
          dropdown: [],
          route: "/about/institute-history",
        },
        {
          value: "Vision, Mission & Quality Policy",
          dropdown: [],
          route: "/about/vision-mission-quality-policy",
        },
        { value: "Messages", dropdown: [], route: "/about/messages" },
        {
          value: "Governing Council",
          dropdown: [],
          route: "/about/governing-council",
        },
        {
          value: "Aproval, Affiliation, Accredation",
          dropdown: [],
          route: "/about/approval-affiliation-accredation",
        },
        {
          value: "Institue Organogram",
          dropdown: [],
          route: "/about/institue-organogram",
        },
        {
          value: "Academic Manual",
          dropdown: [],
          route: "/about/academic-manual",
        },
        {
          value: "Awards & Recognition",
          dropdown: [],
          route: "/about/awards-recognition",
        },
      ],
    },
    {
      value: "Admission",
      route: "",
      dropdown: [
        {
          value: "B. Tech. First year (REAP)",
          dropdown: [],
          route: "/admission/reap",
        },
        {
          value: "B. Tech Second Year (LEAP)",
          dropdown: [],
          route: "/admission/leap",
        },
      ],
    },
    {
      value: "Placement",
      route: "",
      dropdown: [
        { value: "Trainings", dropdown: [], route: "/placement/trainings" },
        { value: "Placements", dropdown: [], route: "/placement/placements" },
        {
          value: "Industry Institution and Interaction (i3)",
          dropdown: [],
          route: "/placement/i3",
        },
      ],
    },
    {
      value: "Department",
      route: "",
      dropdown: [
        {
          value: "Advance Computing",
          dropdown: [],
          route: "/departments/advance-computing",
        },
        {
          value: "Civil Engineering ",
          dropdown: [],
          route: "/departments/civil-engineering",
        },
        {
          value: "Computer Engineering ",
          dropdown: [],
          route: "/departments/computer-engineering",
        },
        {
          value: "Electrical Engineering",
          dropdown: [],
          route: "/departments/electrical-engineering",
        },
        {
          value: "Electronics and Communication Engineering ",
          dropdown: [],
          route: "/departments/electronics-communication-engineering",
        },
        {
          value: "Information Technology ",
          dropdown: [],
          route: "/departments/information-technology",
        },
        {
          value: "Mechanical Engineering ",
          dropdown: [],
          route: "/departments/mechanical-engineering",
        },
        {
          value: "First Year ",
          dropdown: [],
          route: "/departments/first-year",
        },
      ],
    },
    {
      value: "Facilities",
      route: "/facilities",
      dropdown: [],
    },
    {
      value: "Institutional Bodies",
      route: "",
      dropdown: [
        { value: "value", dropdown: [], route: "/institutionalBodies/" },
        { value: "dalni h ", dropdown: [], route: "/institutionalBodies/" },
      ],
    },
    {
      value: "Student Corner",
      route: "",
      dropdown: [
        { value: "Notices", dropdown: [], route: "/studentCorner/notices" },
        {
          value: "Students Council",
          dropdown: [],
          route: "/studentCorner/student-council",
        },
        {
          value: "Professional Society Chapter",
          dropdown: [],
          route: "/studentCorner/professional-society-chapter",
        },
        {
          value: "Scholarship",
          dropdown: [],
          route: "/studentCorner/scholarship",
        },
        {
          value: "Proctorial  Committee",
          dropdown: [],
          route: "/studentCorner/proctorial-committee",
        },
        {
          value: "Central Library",
          dropdown: [],
          route: "/studentCorner/central-library",
        },
        {
          value: "Online Payment ",
          dropdown: [],
          route: "/studentCorner/online-payment",
        },
      ],
    },
    { value: "NAAC", dropdown: [], route: "/naac" },
  ];

  const handleNavigationClick = (e, nav) => {
    e.preventDefault();
    if (nav.route !== "") {
      setActiveNavigation(nav.value);
      navigate(nav.route);
    }
  };
  const handleDropdownClick = (e, nav) => {
    e.preventDefault();
    MobileDrawerContent === nav.value
      ? showMobileDrawerContent("")
      : showMobileDrawerContent(nav.value);
    setActiveNavigation(nav.value);
  };
  const SocialMediaIcons = () => (
    <>
      <FacebookIcon className="icon" />
      <TwitterIcon className="icon" />
      <YouTubeIcon className="icon" />
      <LinkedInIcon className="icon" />
      <InstagramIcon className="icon" />
    </>
  );
  return (
    <div className="header">
      <nav className="header_top">
        <ul className="top_navigation">
          {topNavigation.map((nav, i) => {
            console.log(nav);
            return nav.route !== undefined ? (
              <li
                key={i}
                value={nav.value}
                className={activeNavigation === nav.value && "active"}
                onClick={(e) => handleNavigationClick(e, nav)}>
                {nav.value}
              </li>
            ) : (
              <li
                key={i}
                value={nav.value}
                className={activeNavigation === nav.value && "active"}>
                <a href={nav.url} target="_blank">
                  {nav.value}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="header_middle">
        <div className="left_icon_container">
          <SocialMediaIcons />
        </div>
        <div className="logo_container">
          <img src={PCE_logo} alt="Poornima College logo" />
        </div>
        <div className="right_icon_container">
          <div className="icon_container">
            <MailIcon className="icon" />
            <p>info.pce@poornima.org</p>
          </div>
          <div className="icon_container">
            {" "}
            <PhoneIcon className="icon" />
            <div>
              <p>+91 9829255102</p>
            </div>
          </div>
        </div>
        <div className="mobile_navigation">
          <MenuIcon
            className="hamburgericon"
            onClick={() => showDrawer(true)}
          />

          <div className="mobile_icon_container">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
      <nav className="header_bottom ">
        <ul className="navigation">
          {bottomNavigation.map((nav, i) => {
            return (
              <div
                class={nav.dropdown.length > 0 && "dropdown"}
                key={i}
                onClick={(e) => handleNavigationClick(e, nav)}>
                <li
                  className={
                    nav.value === activeNavigation ? "active nav" : "nav"
                  }>
                  {nav.value} {nav.dropdown.length > 0 && <ArrowDropDownIcon />}
                </li>
                {nav.dropdown.length > 0 && (
                  <div class="dropdown-content">
                    {nav.dropdown.map((content, i) => {
                      return (
                        <a
                          href="#"
                          key={i}
                          onClick={(e) => handleNavigationClick(e, content)}>
                          {content.value}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </ul>
      </nav>
      <div
        className={
          drawer ? "mobile_drawer_active mobile_drawer" : "mobile_drawer"
        }>
        <div className="mobile_drawer_logo_container">
          <img src={PCE_logo} alt="Poornima College logo" />
          <ClearIcon onClick={() => showDrawer(false)} />
        </div>
        <ul className="mobile_drawer_navigation">
          {bottomNavigation.map((nav, i) => {
            return (
              <div
                class={nav.dropdown.length > 0 && "mobile_drawer_dropdown"}
                key={i}>
                <li
                  className={
                    nav.value === activeNavigation ? "active nav" : "nav"
                  }>
                  <span onClick={(e) => handleNavigationClick(e, nav)}>
                    {nav.value}
                  </span>
                  {nav.dropdown.length > 0 && (
                    <ArrowDropDownIcon
                      onClick={(e) => handleDropdownClick(e, nav)}
                    />
                  )}
                </li>
                {nav.dropdown.length > 0 && (
                  <div
                    class={
                      MobileDrawerContent === nav.value
                        ? "mobile_drawer_dropdown_content_active"
                        : "mobile_drawer_dropdown_content"
                    }>
                    {nav.dropdown.map((content, i) => {
                      return (
                        <a
                          href="#"
                          key={i}
                          onClick={(e) => handleNavigationClick(e, content)}>
                          {content.value}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </ul>
        <div className="mobile_icon_container">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default Header;
