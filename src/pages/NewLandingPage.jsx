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
import React from "react";
import { Link } from "react-router-dom";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faVideo, faCheck } from "@fortawesome/free-solid-svg-icons";

// Image with Fallback Code for WebP support, commented out since it isn't used right now, check comment before detailed feature descriptions with images
// import ImgWithFallback from "../components/ImgWithFallback";

// CSS and Images
import "./landingpage.css";
// JPGs
/*
import bgShowcase1JPG from "../img/bg-showcase-4.jpg";
import bgShowcase2JPG from "../img/bg-showcase-5.jpg";
import bgShowcase3JPG from "../img/bg-showcase-6.jpg";
*/
// WebPs
import bgShowcase1WEBP from "../img/bg-showcase-4.webp";
import bgShowcase2WEBP from "../img/bg-showcase-5.webp";
import bgShowcase3WEBP from "../img/bg-showcase-6.webp";

function Landing(props) {
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

            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto py-2">
              {props.livestreaming.length > 0 && (
                <Link to="/livestreams">
                  <button className="btn btn-block btn-lg btn-success">
                    View Livestream!
                  </button>
                </Link>
              )}
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
                  With an AI-Powered search function, you'll find a plethora of
                  details about a specific temple event in no time.
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
            {/* I can't make it use the ImgWithFallback class because whenever I include the class, the positioning gets messed up. I suspect it has something to due with the css using background-img, but that's all I can infer. For now, I'm just using WebP for everything. It's supported in most browsers and */}
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{
                backgroundImage: `url(${bgShowcase1WEBP})`,
                WebkitTransform: "scaleX(-1)",
                transform: "scaleX(-1)",
                clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)"
              }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>View Temple Events Online</h2>
              <p className="lead mb-0 mx-2">
                Using a simple, yet effective AI-powered search tool, finding
                when and where a temple event is occuring will be easy as cake!
                Just type in the name of the temple event and it'll
                automatically show up.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 text-white showcase-img"
              style={{
                backgroundImage: `url(${bgShowcase2WEBP})`,
                clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0 100%)"
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
                backgroundImage: `url(${bgShowcase3WEBP})`,
                clipPath: "polygon(0 0, 100% 0%, 100% 100%, 25% 100%)"
            }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Easy to Use</h2>
              <p className="lead mb-0 mx-2">
                With a innovative and simple design, anyone can get started in
                no time on any device.
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
    </div>
  );
}

export default Landing;
