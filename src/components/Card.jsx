import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import AddToCalendarButton from "./AddToCalendarAdapted";

// TODO: Use PropTypes to create explicit prop requirements
// For now, the props required is "card" which is the data for a card

class Card extends Component {
  render() {
    // Prepare event object for add to calendar button
    const startDatetime = moment(this.props.card.startTimestamp).utc();
    const endDatetime = moment(this.props.card.endTimestamp).utc();
    const duration = moment.duration(endDatetime.diff(startDatetime)).asHours();
    const event = {
      description: this.props.card.description,
      duration,
      endDatetime: endDatetime.format("YYYYMMDDTHHmmssZ"),
      location: this.props.card.address,
      startDatetime: startDatetime.format("YYYYMMDDTHHmmssZ"),
      title: this.props.card.title,
    };

    // Add the livestream button if the event is currently being livestreamed
    let goToLivestreamButton = null;
    if (this.props.card.livestreaming) {
      goToLivestreamButton = (
        <Link to="/livestreams">
          <button className="btn btn-success mx-1 my-1">
            <strong>Go to Livestream!</strong>
          </button>
        </Link>
      );
    }

    // Remove the Add to Calendar button if the date has already passed
    let addToCalendarButton = <AddToCalendarButton className="mx-1 my-1" event={event} />;
    if (this.props.card.endTimestamp < Date.now()) {
      addToCalendarButton = null;
    }

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

          {goToLivestreamButton}

          {addToCalendarButton}

          <Link to={`/events/${this.props.card.id}`}>
            <button className="btn btn-info mx-1 my-1">
              More Information
            </button>
          </Link>
        </div>
        <div className="card-footer">
          <small className="text-muted">{this.formatRelativeTime()}</small>
        </div>
      </div>
    );
  }

  formatRelativeTime() {
    if (
      (this.props.startTimestamp < Date.now()) &
      (this.props.endTimestamp > Date.now())
    ) {
      return "Currently happening";
    }
    if (this.props.card.startTimestamp > Date.now()) {
      // Haven't passed date yet
      // console.log("hasn't happened", this.props.card.timestamp);
      return "In " + moment(this.props.card.startTimestamp).toNow(true);
    } else if (this.props.card.endTimestamp < Date.now()) {
      // Already passed date
      // console.log("already happened", this.props.card.timestamp);
      return moment(this.props.card.endTimestamp).toNow(true) + " ago";
    } else {
      // Is happening now
      return "Currently happening";
    }
  }
}

export default Card;
