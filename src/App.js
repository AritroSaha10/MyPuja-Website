/*
    Copyright 2020 Aritro Saha
 */

import React, { Component } from "react";
import "./App.css";
import firebase from "firebase/app";
import firestore from "firebase/firestore";

// Components
import Navbar from "./components/Navbar";

// Pages
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Livestreams from "./pages/Livestreams";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page404 from "./pages/Page404";

class App extends Component {
  state = {
    cards: [],
    hasRecievedData: false,
  };

  // We can get our Firebase data from here
  componentDidMount() {
    let cards = [];

    firebase
      .firestore()
      .collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Go through each post and add them to the cards state list
          console.log(doc.data());
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

        this.setState({ cards });
        this.setState({ hasRecievedData: true });
      })
      .catch((err) => {
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

            <Route path="*" exact component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
