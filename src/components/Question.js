import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";
import Votes from "./Votes";

class Question extends Component {
  render() {
    const { question, user } = this.props;

    const { id, author, timestamp, optionOne, optionTwo } = question;
    const { avatarURL, name } = user;

    return (
      <div className="question">
        <div className="question-info">
          <div className="questionAvatar">
            <img src={avatarURL} alt={`avatar of ${name}`} className="avatar" />
          </div>
          <div className="info">
            <span><strong>{name}</strong></span>
            <div>{formatDate(timestamp)}</div>
          </div>
        </div>
        <button className="option option1">
          <span>{optionOne.text}</span>
          <Votes votes={optionOne.votes}/>
        </button>
        <button className="option option2">
          <span>{optionTwo.text}</span>
          <Votes votes={optionTwo.votes}/>
        </button>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authUser }, { questionId }) {
  const question = questions[questionId];
  const user = users[question.author];
  return {
    authUser,
    question: question ? question : null,
    user: user ? user : null,
  };
}
export default connect(mapStateToProps)(Question);
