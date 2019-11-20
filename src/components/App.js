import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Nav from "../components/Nav"
import Login from "../components/Login";
import HomePage from "../components/HomePage"
import NewQuestion from "../components/NewQuestion"
import Leaderboard from "../components/Leaderboard"
import QuestionPage from "../components/QuestionPage"
import ErrorPage from "../components/ErrorPage"
import NotFound from "../components/NotFound"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/login' component={Login} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/question/:id' component={QuestionPage} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default connect()(App);
