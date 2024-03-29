import React from "react";
import "./Rent.css";
import { Link } from "react-router-dom";
import { rent } from "../../rent";
import { BsSearch } from "react-icons/bs";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Rent = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
      >
        <Marker
          position={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
        />

        <Marker position={{ lat: -1.250349, lng: 36.641401 }} />

        <Marker position={{ lat: -1.32249, lng: 36.884941 }} />
      </GoogleMap>
    ))
  );

  return (
    <section id="rent" className="rent-dib-bg">
      <div className="town-home">
        <div className="header-put">
          <input
            className="input-fire"
            type="text"
            placeholder="Enter city, town or neighborhood"
          />
          <h4>
            <BsSearch />
          </h4>
        </div>
      </div>

      <div className="rent-townhomes">
        <div className="maps-google">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `800px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className="google-rent">
          <div className="float">
            <h4>Maps</h4>
          </div>
          <div className="correction-box row ">
            {" "}
            {rent.map((rent, index) => {
              return (
                <div
                  className="ranch-card nopadding col-xl-6 col-lg-6 col-md-3 col-sm-6 col-xs-12"
                  key={index}
                >
                  <div className="card-img">
                    <Link to={rent.link}>
                      <img
                        className="d-block w-100"
                        src={rent.image}
                        alt="House1"
                        loading="lazy"
                      />
                    </Link>
                    <span className="spannito">
                      <Link to={rent.link} className="link">
                        <h4>{rent.form}</h4>
                      </Link>
                    </span>
                  </div>
                  <div className="card-text">
                    <h4>{rent.name}</h4>
                    <h5>{rent.price}</h5>
                    <h6>
                      {rent.bed}
                      {rent.iconOne} {rent.bath} {rent.iconOne}
                      {rent.size}
                    </h6>
                    <small>{rent.small}</small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rent;
