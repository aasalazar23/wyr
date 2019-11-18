import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { handleSaveAnswer } from "../actions/shared";
import Votes from "./Votes";

class Question extends Component {
  handleVote = (e, option) => {
    e.preventDefault();
    const { dispatch, question, authUser } = this.props;

    dispatch(
      handleSaveAnswer({
        authUser,
        qid: question.id,
        answer: option,
      })
    );
  };
  render() {
    const { question, user } = this.props;

    // if user routes to non existent question ID
    if (question === null) {
      return <p>This question does not exist</p>;
    }

    const { id, author, timestamp, optionOne, optionTwo } = question;
    const { avatarURL, name } = user;

    return (
      <div className="question">
        <div className="question-info">
          <div className="questionAvatar">
            <img src={avatarURL} alt={`avatar of ${name}`} className="avatar" />
          </div>
          <div className="info">
            <span>
              <strong>{name}</strong>
            </span>
            <div>{formatDate(timestamp)}</div>
          </div>
        </div>
        <button
          className="option option1"
          onClick={e => this.handleVote(e, "optionOne")}
        >
          <span>{optionOne.text}</span>
          <Votes votes={optionOne.votes} />
        </button>
        <button
          className="option option2"
          onClick={e => this.handleVote(e, "optionTwo")}
        >
          <span>{optionTwo.text}</span>
          <Votes votes={optionTwo.votes} />
        </button>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authUser }, { questionId }) {
  //TODO: check if authUser has voted, if so, disable button, render votes
  const question = questions[questionId];
  const user = users[question.author];
  return {
    authUser,
    question: question ? question : null,
    user: user ? user : null,
  };
}
export default connect(mapStateToProps)(Question);
