import React, { Component } from "react"
import { connect } from "react-redux"
import { setAuthUser } from "../actions/authUser";
class Login extends Component {
  state = {
    id: "default"
  }

  handleChange = e => {
    const id = e.target.value

    this.setState({id})
  }

  handleSubmit = e => {
    e.preventDefault();
    const {id} = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthUser(id));


  }
  render() {
    const { users } = this.props;
    const id = this.state.id;

    if (users === null ) {
      return <p>No users available</p>
    }
    return (
      <div className="login center">
        <h2 className="center">Login</h2>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <select autoFocus className="custom-select" name="userLogin" onChange={this.handleChange}>
            <option value="default">Select user</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          <button className="btn" type="submit" disabled={id === "default"}>Submit</button>
        </form>

      </div>
    )
  }
}

function mapStateToProps({ users }) {
  // for basic data protection, hides access to users full data. returns array of ids and names only
  // const userList = [];
  // if (users !== {}) {
  //   for (const user in users) {
  //     userList.push({id: users[user].id, name: users[user].name})
  //   }
  // }
  const userList = Object.values(users).map(({ id, name}) => ({ id, name })); // per udacity review, this is awesome!
  return {
    users: userList
  };
}

export default connect(mapStateToProps)(Login);
