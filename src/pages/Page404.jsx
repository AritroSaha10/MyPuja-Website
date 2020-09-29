import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page404 extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Oops!</h1>
        <h3>404 - Not Found</h3>
        <p>
          Sorry, the page you're looking for might've been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <button className="btn btn-primary">Go Home</button>
        </Link>
      </div>
    );
  }
}

export default Page404;