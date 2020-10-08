/*
    Copyright 2020 Aritro Saha
 */

import React, { Component } from "react";
import "./App.css";
import firebase from "firebase/app";
// eslint-disable-next-line no-unused-vars
import firestore from "firebase/firestore";

// Components
import Navbar from "./components/Navbar";

// Pages
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Livestreams from "./pages/Livestreams";
import Donate from "./pages/Donate";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page404 from "./pages/Page404";

class App extends Component {
  state = {
    cards: [],
    hasRecievedData: false,
  };

  // We can get our Firebase data from here
  componentDidMount() {
    // Get the promise for the posts reference
    const postsRef = firebase.firestore().collection("posts");
    const dataGetPromise = postsRef.get();

    // Function that goes through each entry in the database and
    // add them to the cards list in the state
    const exportQueriesToState = (querySnapshot) => {
      let cards = [];

      querySnapshot.forEach((doc) => {
        // Add each card to the local array
        cards.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          startTimestamp: doc.data().start_timestamp.seconds * 1000,
          endTimestamp: doc.data().end_timestamp.seconds * 1000,
          images: doc.data().images,
          address: doc.data().address,
          livestreaming: doc.data().livestreaming,
        });
      });

      // Finished with adding all entries into local array,
      // update state with local array and let others know that
      // all data has been recieved
      this.setState({ cards });
      this.setState({ hasRecievedData: true });
    };

    // Run the promise and callback
    dataGetPromise.then(exportQueriesToState).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route path="/" exact component={LandingPage} />

            <Route path="/about" exact component={About} />

            <Route
              path="/events"
              exact
              component={(routerProps) => (
                <Events
                  {...routerProps}
                  cards={this.state.cards}
                  onSearchBarChange={this.handleSearchBarInput}
                  finishedLoading={this.state.hasRecievedData}
                />
              )}
            />

            <Route path="/livestreams" exact component={Livestreams} />

            <Route
              path="/events/:id"
              exact
              component={(routerProps) => (
                <EventDetails
                  {...routerProps}
                  event={this.state.cards.filter(
                    (x) => x.id === routerProps.match.params.id
                  )}
                  finishedLoading={this.state.hasRecievedData}
                />
              )}
            />

            <Route path="/donate" exact component={Donate} />

            <Route path="*" exact component={Page404} />
          </Switch>

          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">© 2020 Aritro Saha</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/about">About</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/donate">Donate</Link>
              </li>
            </ul>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
