import React, { Component } from "react";
import VideoEmbed from "../components/VideoEmbed";

class Livestreams extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <br />
        <h1>Livestreams</h1>

        <div>
          <h2 className="float-left">Current Livestream:</h2>
        </div>
        <VideoEmbed className="float-center" videoID="jNQXAC9IVRw"/>
      </div>
    );
  }
}

export default Livestreams;
