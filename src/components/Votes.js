import React, { Component } from "react";
import { connect } from "react-redux";

class Votes extends Component {
  render() {
    return (
      <div>
        <ul className="voters">
          {this.props.voterAvatars.map(voter => (
            <li key={voter.id}>
              <img
                src={voter.url}
                alt={`avatar of ${voter.name}`}
                className="voterAvatar"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// might need to get this info off of store, want to pull off votes directly from the store so it doesn't get mixed up
function mapStateToProps({ users, authUser }, { questionId, option, votes }) {
  const voterAvatars = votes.map(vote => ({
    url: users[vote].avatarURL,
    name: users[vote].name,
    id: questionId + users[vote].name,
  }));
  return {
    authUser,
    voterAvatars: voterAvatars,
  };
}

export default connect(mapStateToProps)(Votes);
