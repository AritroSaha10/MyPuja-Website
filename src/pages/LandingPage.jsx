/*
 * This file includes code from:
 *    Start Bootstrap - Landing Page v5.0.8 (https://startbootstrap.com/themes/landing-page)
 *    Copyright 2013-2020 Start Bootstrap
 *    Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
 */

/*
    Copyright 2020 Aritro Saha
 */

// React Necessities
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faVideo, faCheck } from "@fortawesome/free-solid-svg-icons";

// CSS and Images
import "./landingpage.css";
import bgShowcase1 from "../img/bg-showcase-4.jpg";
import bgShowcase2 from "../img/bg-showcase-5.jpg";
import bgShowcase3 from "../img/bg-showcase-6.jpg";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="masthead text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">
                  Experience temple events anywhere in the world.
                </h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <Link to="/events">
                  <button className="btn btn-block btn-lg btn-primary">
                    Go to Events!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section className="features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <FontAwesomeIcon
                      icon={faDesktop}
                      className="m-auto text-primary"
                      size="5x"
                    />
                  </div>
                  <h3>View Temple Events Online</h3>
                  <p className="lead mb-0">
                    With an AI-Powered search function, you'll find a plethora
                    of details about a specific temple event in no time.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <FontAwesomeIcon
                      icon={faVideo}
                      className="m-auto text-primary"
                      size="5x"
                    />
                  </div>
                  <h3>Watch Temple Events from Anywhere</h3>
                  <p className="lead mb-0">
                    Using advanced streaming technology, you can participate in
                    temple events from anywhere in the world.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    {/* <i className="icon-check m-auto text-primary"></i> */}
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="m-auto text-primary"
                      size="6x"
                    />
                  </div>
                  <h3>Easy to Use</h3>
                  <p className="lead mb-0">
                    Our simple and intuitive UI will get you started in no time!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="showcase">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{
                  backgroundImage: `url(${bgShowcase1})`,
                  WebkitTransform: "scaleX(-1)",
                  transform: "scaleX(-1)",
                }}
              ></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>View Temple Events Online</h2>
                <p className="lead mb-0 mx-2">
                  Using a simple, yet effective AI-powered search tool, finding
                  when and where a temple event is occuring will be easy as
                  cake! Just type in the name of the temple event and it'll
                  automatically show up.
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-6 text-white showcase-img"
                style={{
                  backgroundImage: `url(${bgShowcase2})`,
                }}
              ></div>
              <div className="col-lg-6 my-auto showcase-text">
                <h2>Watch Temple Events from Anywhere</h2>
                <p className="lead mb-0 mx-2">
                  Taking advantage of advanced streaming technology, you can
                  participate in temple events with a click of a button. Whether
                  you're at work, or isolating yourself at home, you can view
                  temple events from the touch of a finger.
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{
                  backgroundImage: `url(${bgShowcase3})`,
                }}
              ></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Easy to Use</h2>
                <p className="lead mb-0 mx-2">
                  With a innovative and simple design, anyone can get started in no time on any device. 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 
        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="img/testimonials-1.jpg"
                    alt=""
                  />
                  <h5>Margaret E.</h5>
                  <p className="font-weight-light mb-0">
                    "This is fantastic! Thanks so much guys!"
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="img/testimonials-2.jpg"
                    alt=""
                  />
                  <h5>Fred S.</h5>
                  <p className="font-weight-light mb-0">
                    "Bootstrap is amazing. I've been using it to create lots of
                    super nice landing pages."
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="img/testimonials-3.jpg"
                    alt=""
                  />
                  <h5>Sarah W.</h5>
                  <p className="font-weight-light mb-0">
                    "Thanks so much for making these free resources available to
                    us!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}

        <section className="call-to-action text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h2 className="mb-4">Ready to get started? Start now!</h2>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <Link to="/events">
                  <button className="btn btn-block btn-lg btn-primary">
                    Go to Events!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <Link to="/tos">Terms of Use</Link>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <Link to="/privacypolicy">Privacy Policy</Link>
                  </li>
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">
                  &copy; Firebase Test 2020. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Landing;
