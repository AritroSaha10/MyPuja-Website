import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import Card from "../components/Card";
import Loading from "./Loading";

class Events extends Component {
  state = {
    searchTerm: "",
    pastEventsDropDown: false,
  };

  // Input change
  handleSearchBarInput(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    let sortedCards = this.props.cards
      .filter(
        (a) =>
          a.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) |
          a.description
            .toLowerCase()
            .includes(this.state.searchTerm.toLowerCase())
        //TODO: Add functionality that uses the keywords attribute
      )
      .sort((a, b) => {
        // if livestreaming trait on, place first
        if (a.livestreaming) return -1;
        if (b.livestreaming) return 1;

        // pushes back event if it's already done
        if (a.endTimestamp < Date.now()) return 1;
        if (b.endTimestamp < Date.now()) return -1;

        // otherwise, sort by least to greatest in unix timestamp
        if (a.startTimestamp > b.startTimestamp) return 1;
        else if (a.startTimestamp < b.startTimestamp) return -1;
        return 0;
      });

    if (!this.props.finishedLoading) {
      // return loading html
      return <Loading />;
    }

    return (
      <div className="container">
        <br />
        <h1>Events</h1>
        <br />
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-search"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </span>
          </div>
          <input
            className="form-control"
            placeholder="Search..."
            onChange={this.handleSearchBarInput.bind(this)}
          ></input>
        </div>

        {sortedCards.length > 0 && (
          <div className="card-columns justify-content-center">
            {sortedCards
              .filter((card) => card.endTimestamp >= Date.now())
              .map((card) => (
                <Card key={card.id} card={card} />
              ))}
          </div>
        )}

        {sortedCards.length === 0 && (
          <div>
            <br />
            <svg
              width="3.5em"
              height="3.5em"
              viewBox="0 0 16 16"
              className="bi bi-search"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>

            <br />
            <br />

            <h4>No matching items found</h4>
          </div>
        )}

        <br />
        <br />

        {sortedCards.length > 0 && (
          <div>
            <div class="past-events-title d-inline-flex">
              <h3 class="pr-2">Past Events</h3>

              {/* Toggle for carret on side */}
              <button
                className="btn btn-primary"
                onClick={() =>
                  this.setState({
                    pastEventsDropDown: !this.state.pastEventsDropDown,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={this.state.pastEventsDropDown ? faCaretUp : faCaretDown}
                />
              </button>
            </div>

            <Collapse in={this.state.pastEventsDropDown}>
              <div>
                <br />
                <div className="card-columns justify-content-center">
                  {sortedCards
                    .filter((card) => card.endTimestamp < Date.now())
                    .map((card) => (
                      <Card key={card.id} card={card} />
                    ))}
                </div>
              </div>
            </Collapse>
          </div>
        )}
      </div>
    );
  }
}

export default Events;
