import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
  render() {
    const { user } = this.props;

    if (user === null) {
      return <p>This user does not exist</p>;
    }
    const { name, avatarURL, answers, questions } = user;

    return (
      <div className="user">
        <div className="item-info">
          <div className="itemAvatar">
            <img src={avatarURL} alt={`avatar of ${name}`} className="avatar" />
          </div>
          <div className="info">
            <span>
              <strong>{name}</strong>
            </span>
          </div>
        </div>
        <div className="questionsAsked">
          Questions Asked: {questions.length}
        </div>
        <div className="questionsAnswered">
          Questions Answered: {Object.keys(answers).length}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }, { userId }) {
  const user = users[userId];
  return {
    user: user ? user : null,
  };
}

export default connect(mapStateToProps)(User)
