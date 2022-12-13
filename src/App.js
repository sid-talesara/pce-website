import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import InstituteHistory from "./Pages/about/InstituteHistory";
import Messages from "./Pages/about/Messages";
import VMQ from "./Pages/about/VMQ";
import Department from "./Pages/Deparment";
import Naac from "./Pages/Naac";
import Contact from "./Pages/Contact";
import Facilities from "./Pages/Facilities";
import Gallery from "./Pages/Gallery";
import "./styles/main.scss";
const LayOut = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <div className="app__page">{children}</div>
      <Footer />
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <LayOut>
            <HomePage />
          </LayOut>
        }></Route>
      <Route
        path="/naac"
        exact
        element={
          <LayOut>
            <Naac />
          </LayOut>
        }></Route>
      <Route
        path="/contact-us"
        exact
        element={
          <LayOut>
            <Contact />
          </LayOut>
        }></Route>
      <Route
        path="/gallery"
        exact
        element={
          <LayOut>
            <Gallery />
          </LayOut>
        }></Route>
      <Route
        path="/departments/:id"
        exact
        element={
          <LayOut>
            <Department />
          </LayOut>
        }></Route>
      <Route
        path="/about/institute-history"
        exact
        element={
          <LayOut>
            <InstituteHistory />
          </LayOut>
        }></Route>{" "}
      <Route
        path="/about/messages"
        exact
        element={
          <LayOut>
            <Messages />
          </LayOut>
        }></Route>{" "}
      <Route
        path="/about/vision-mission-quality-policy"
        exact
        element={
          <LayOut>
            <VMQ />
          </LayOut>
        }></Route>
      <Route
        path="/facilities"
        exact
        element={
          <LayOut>
            <Facilities />
          </LayOut>
        }></Route>
    </Routes>
  );
};
export default App;
