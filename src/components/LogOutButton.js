import React, { Component } from "react";
import { connect } from "react-redux";
import { logOutAuthUser } from "../actions/authUser";

class LogOutButton extends Component {
  handleClick = e => {
    e.preventDefault();

    const { dispatch } = this.props;
    dispatch(logOutAuthUser());
  };
  render() {
    const { auth } = this.props;
    if (auth === null) return null;
    return <button onClick={this.handleClick}>Logout</button>;
  }
}

function mapStateToProps({ authUser }) {
  return {
    auth: authUser,
  };
}
export default connect(mapStateToProps)(LogOutButton);
