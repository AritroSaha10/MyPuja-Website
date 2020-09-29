import React, { Component } from "react";

class VideoEmbed extends Component {
  state = {
    videoID: this.props.videoID,
  };
  
  render() {
    return (
      <iframe
        width="1280"
        height="720"
        src={"https://www.youtube.com/embed/" + this.state.videoID}
        frameBorder="0"
        title={this.state.videoID}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }
}

export default VideoEmbed;
