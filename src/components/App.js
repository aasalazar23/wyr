import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import HomePage from "../components/HomePage";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="container">
        <HomePage />
      </div>
    );
  }
}

export default connect()(App);
