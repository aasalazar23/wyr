import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Nav from "../components/Nav"
import {Router } from "../components/Router"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Router />
        </div>
      </BrowserRouter>

    );
  }
}

export default connect()(App);
