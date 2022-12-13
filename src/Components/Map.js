import React from "react";
import GoogleMapReact from "google-map-react";
import marker from "../Assets/images/marker.jpg";
const Map = () => {
  const defaultProps = {
    center: {
      lat: 26.765612293974794,
      lng: 75.85360008044862,
    },
    zoom: 18,
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <img
          src={marker}
          lat={26.765612293974794}
          lng={75.85360008044862}
          text="Poornima College Of Engineering"
          alt="Poornima College Of Engineering"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
