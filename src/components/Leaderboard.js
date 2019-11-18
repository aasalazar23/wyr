import React, { Component } from "react";
import { connect } from "react-redux"
import User from "./User"

class Leaderboard extends Component {
  render() {
    const { userIds } = this.props;
    if (userIds===null) {
      return <p>No users found</p>
    }
    return (
      <div className="leaders">
        <h2 className="center">Leaderboard</h2>
        <ul>
          {userIds.map((userId) => (
            <li key={userId}>
              <User userId={userId}></User>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  const userInteractions = {}
  for (const user in users) {
    userInteractions[users[user].id] =
      users[user].questions.length + Object.keys(users[user].answers).length;
  }

  return {
    userIds: Object.keys(userInteractions)
      .sort((a,b) => {
        return userInteractions[b] - userInteractions[a]
      })
  }
}

export default connect(mapStateToProps)(Leaderboard)