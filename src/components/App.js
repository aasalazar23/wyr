import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import HomePage from "../components/HomePage";
import NewQuestion from "../components/NewQuestion";
import User from "../components/User";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="container">
        <User userId="aSalazar" />
      </div>
    );
  }
}

export default connect()(App);
