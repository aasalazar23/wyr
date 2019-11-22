import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom"
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
    const { question, user, answered } = this.props;

    const { id, timestamp, optionOne, optionTwo } = question;

    return (
      <Link to={`/question/${id}`} className="question">
        <button
          className="option option1"
          onClick={e => this.handleVote(e, "optionOne")}
          disabled={answered}
        >
          <span>{optionOne.text}</span>
          {answered ? <Votes votes={optionOne.votes} /> : null}
        </button>
        <button
          className="option option2"
          onClick={e => this.handleVote(e, "optionTwo")}
          disabled={answered}
        >
          <span>{optionTwo.text}</span>
          {answered ? <Votes votes={optionTwo.votes} /> : null}
        </button>
      </Link>
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
export default withRouter(connect(mapStateToProps)(Question));
