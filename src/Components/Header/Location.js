import React, { Component } from "react";
import MapComponent from "./MapComponent";
import "./location.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLatLng: {
        lat: 33.44958,
        lng: -111.98504
      }
    };
  }

  componentWillUpdate() {
    this.getGeoLocation();
  }

  componentDidMount() {
    this.getGeoLocation();
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords);
        this.setState(prevState => ({
          currentLatLng: {
            ...prevState.currentLatLng,
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }));
      });
    } else {
      console.log("location not found");
    }
  };

  render() {
    return <MapComponent currentLocation={this.state.currentLatLng} />;
  }
}
