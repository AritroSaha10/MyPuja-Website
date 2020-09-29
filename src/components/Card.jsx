import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import AddToCalendar from "react-add-to-calendar";

class Card extends Component {
  state = {
    event: {
      title: "Sample Event",
      description: "This is the sample event provided as an example only",
      location: "Portland, OR",
      startTime: "2016-09-16T20:15:00-04:00",
      endTime: "2016-09-16T21:45:00-04:00",
    },
  };

  render() {
    const button = (
      <button className="btn btn-success mx-1">Add to Calendar</button>
    );

    return (
      <div className="card" id={this.props.card.id}>
        <img
          src={this.props.card.images[0]}
          className="card-img-top"
          alt=""
          style={{
            objectFit: "contain",
            maxWidth: "300px",
            maxHeight: "300px",
            margin: "auto",
            padding: "30px 30px 30px 30px",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.card.title}</h5>
          <p className="card-text">{this.props.card.description}</p>
          {/* TODO: Add calendar functionality*/}

          <AddToCalendar event={this.state.event} />

          <Link to={`/events/${this.props.card.id}`}>
            <button className="btn btn-primary mx-1">More Information</button>
          </Link>
        </div>
        <div className="card-footer">
          <small className="text-muted">{this.formatRelativeTime()}</small>
        </div>
      </div>
    );
  }

  formatRelativeTime() {
    if (this.props.card.timestamp > Date.now()) {
      // Haven't passed date yet
      // console.log("hasn't happened", this.props.card.timestamp);
      return "In " + moment(this.props.card.timestamp).toNow(true);
    } else if (this.props.card.timestamp < Date.now()) {
      // Already passed date
      // console.log("already happened", this.props.card.timestamp);
      return moment(this.props.card.timestamp).toNow(true) + " ago";
    } else {
      // Is happening now
      return "Now";
    }
  }
}

export default Card;
