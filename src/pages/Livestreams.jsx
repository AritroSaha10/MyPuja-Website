import React, { Component } from "react";
import VideoEmbed from "../components/VideoEmbed";
import ReactHLSPlayer from "react-hls-player";

class Livestreams extends Component {
  state = {};

  CurrentLivestream = () => {
    let embed = null;

    for (let i = 0; i < this.props.events.length; i++) {
      let card = this.props.events[i];
      if (card.livestreaming === true && card.livestreamURL !== "") {
        embed = (
          <div>
            <div>
              <h2 className="float-left">Current Livestream:</h2>
            </div>
            <VideoEmbed
              className="float-center"
              videoID={card.livestreamURL}
              customAllow="autoplay=1; "
            />
          </div>
        );
        break;
      }

      if (card.livestreaming === true && card.livestreamURL === "") {
        // Show the current stream
        embed = (
          <div>
            <div>
              <h2 className="float-left">Current Livestream:</h2>
            </div>
            <ReactHLSPlayer
              url="https://cdn12.henico.net:8443/live/kalibari/index.m3u8"
              autoplay={true}
              controls={true}
            />
          </div>
        );
      }
    }

    if (embed === null) {
      embed = (
        <div>
          <div>
            <h4>There are no current livestreams at the moment.</h4>
          </div>
        </div>
      );
    }

    return embed;
  };

  PastLivestreams = () => {
    let embeds = [];

    for (let i = 0; i < this.props.events.length; i++) {
      let card = this.props.events[i];
      if (!card.livestreaming && card.livestreamURL !== "") {
        embeds.push(
          <div className="card" key={Date.now() + Math.random() * 10}>
            <VideoEmbed
              key={Date.now()}
              className="card-img-top"
              videoID={card.livestreamURL}
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
            </div>
          </div>
        );
      }
    }

    return (
      <div>
        <div>
          <h2 className="">Past Livestreams:</h2>
        </div>
        <div className="card-columns">{embeds.map((e) => e)}</div>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <br />
        <h1>Livestreams</h1>
        <this.CurrentLivestream />
        <br />
        <br />
        <this.PastLivestreams />
      </div>
    );
  }
}

export default Livestreams;
