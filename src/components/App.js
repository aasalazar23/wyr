import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import HomePage from "../components/HomePage";
import NewQuestion from "../components/NewQuestion";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="container">
        <NewQuestion />
      </div>
    );
  }
}

export default connect()(App);
