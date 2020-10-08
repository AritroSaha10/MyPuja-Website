/*
    Copyright 2020 Aritro Saha
 */

import React, { Component } from "react";
import Page404 from "./Page404";
import { Link } from "react-router-dom";
import moment from "moment";
import AddToCalendarButton from "../components/AddToCalendarAdapted";
import Carousel from "react-bootstrap/Carousel";

class EventDetails extends Component {
  state = {};
  render() {
    if (!this.props.finishedLoading) {
      // return loading html
      return (
        <div className="" style={{ margin: "auto", width: "50%" }}>
          <br />
          <br />
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p>Loading...</p>
        </div>
      );
    }

    if (this.props.event.length === 0) {
      return new Page404().render();
    }

    // We know there's an event, prepare everything for render
    console.log("Event: ", this.props.event);

    const startDatetime = moment(this.props.event[0].startTimestamp).utc();
    const endDatetime = moment(this.props.event[0].endTimestamp).utc();
    const duration = moment.duration(endDatetime.diff(startDatetime)).asHours();
    const event = {
      description: this.props.event[0].description,
      duration,
      endDatetime: endDatetime.format("YYYYMMDDTHHmmssZ"),
      location: this.props.event[0].address,
      startDatetime: startDatetime.format("YYYYMMDDTHHmmssZ"),
      title: this.props.event[0].title,
    };

    let goToLivestreamButton = null;
    if (this.props.event[0].livestreaming) {
      goToLivestreamButton = (
        <Link to="/livestreams">
          <button className="btn btn-success mx-1 my-1">
            <strong>Go to Livestream!</strong>
          </button>
        </Link>
      );
    }

    return (
      <div className="container">
        <br />
        <h1>{this.props.event[0].title}</h1>
        <img
          src={this.props.event[0].images[0]}
          alt=""
          className="img-fluid"
          style={{
            objectFit: "contain",
            maxWidth: "500px",
            maxHeight: "800px",
          }}
        />
        <br />
        <p>{this.props.event[0].description}</p>
        <p>Address: {this.props.event[0].address}</p>
        <br />
        <div>
          {goToLivestreamButton}

          <AddToCalendarButton className="mx-1 my-1" event={event} />
        </div>
      </div>
    );
  }
}

export default EventDetails;
