import React, { Component } from "react";

class VideoEmbed extends Component {
  state = {
    videoID: this.props.videoID,
  };

  render() {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={"https://www.youtube.com/embed/" + this.state.videoID + `?rel=0&amp;modestbranding=1&amp;${this.props.customAllow}`}
          title={this.state.videoID}
          allow={`encrypted-media; picture-in-picture`}
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default VideoEmbed;
