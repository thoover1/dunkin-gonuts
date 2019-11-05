import React from "react";
import { compose, withProps } from "recompose";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap
  //   Marker
} from "react-google-maps";

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBIykwFHwPd0PNg__ZJ8UksXG8UyzCupf8`,
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "60vh" }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{
      lat: props.currentLocation.lat,
      lng: props.currentLocation.lng
    }}
  >
    {/* {props.isMarkerShown && (
      <Marker
        position={{
          lat: props.currentLocation.lat,
          lng: props.currentLocation.lng
        }}
        onClick={props.onMarkerClick}
      />
    )} */}
  </GoogleMap>
));

export default MapComponent;
