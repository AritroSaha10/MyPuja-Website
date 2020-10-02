/*
    Copyright 2020 Aritro Saha
 */

import React, { Component } from "react";
import Page404 from "./Page404";

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

    console.log("Event: ", this.props.event);

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
            maxWidth: "800px",
            maxHeight: "800px",
          }}
        />
        <br/>
        <p>{this.props.event[0].description}</p>
        <br/>
        <p>Address: {this.props.event[0].address}</p>
      </div>
    );
  }
}

export default EventDetails;
