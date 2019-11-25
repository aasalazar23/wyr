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
    return (
    <div className="logout">
      <span>Welcome {this.props.userName}  </span>
      <button onClick={this.handleClick} className="btn">Logout</button>
    </div>
    )
  }
}

function mapStateToProps({ authUser, users }) {
  const userName = authUser===null ? null : users[authUser].name;
  return {
    auth: authUser,
    userName
  };
}
export default connect(mapStateToProps)(LogOutButton);
