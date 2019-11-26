import React from "react";
import { Route, Switch } from "react-router-dom"
import { useSelector } from "react-redux";
import Login from "../components/Login";
import HomePage from "../components/Homepage";
import NewQuestion from "../components/NewQuestion";
import Leaderboard from "../components/Leaderboard";
import QuestionPage from "../components/QuestionPage";
import NotFound from "../components/NotFound";


// defining a private route wrapper
      // component: Component only capitalizes it
const PrivateRoute = ({ component, ...props }) => {
  const auth = useSelector(state => state.authUser) // My first hook :) works like mapStateToProp
  const AuthComponent = auth ? component : Login

  return <Route {...props} component={AuthComponent} />;
}
export const Router = () => (
  <Switch>
    <PrivateRoute path="/" exact component={HomePage} />
    <Route path="/login" component={Login} />
    <PrivateRoute path="/add" component={NewQuestion} />
    <PrivateRoute path="/question/:id" component={QuestionPage} />
    <PrivateRoute path="/leaderboard" component={Leaderboard} />
    <Route path="*" component={NotFound} />
  </Switch>
);
