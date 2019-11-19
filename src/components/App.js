import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Nav from "../components/Nav"
import Login from "../components/Login";
import HomePage from "../components/HomePage"
import NewQuestion from "../components/NewQuestion"
import Leaderboard from "../components/Leaderboard"
import QuestionPage from "../components/QuestionPage"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Route path='/' exact component={HomePage} />
          <Route path='/login' component={Login} />
          <Route path='/add' component={NewQuestion} />
          <Route path='/question/:id' component={QuestionPage} />
          <Route path='/leaderboard' component={Leaderboard} />
        </div>
      </BrowserRouter>

    );
  }
}

export default connect()(App);
