import React from "react";

function About() {
  return (
    <div className="container">
      <br />
      <h1>About Page</h1>
      <p>
        This page is yet to be constructed, as this website has not been fully
        made. Thank you for understanding! In the meanwhile, look at this cute
        cat image.
      </p>
      <img
        src="https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede-1300x882.jpg"
        className="img-fluid"
        alt="Cute cat"
        style={{
          objectFit: "contain",
          maxWidth: "400px",
          maxHeight: "400px",
        }}
      />
    </div>
  );
}

export default About;
