import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { formatDate } from "../utils/helpers";
import Question from "../components/Question";

class QuestionPage extends Component {
  render() {
    const { question, user, authUser } = this.props;

    // if user routes to non existent question ID
    if (question === null) {
      return <Redirect to="/notfound"></Redirect>;
    }

    const aggregatedQuestionVotes = [
      ...question.optionOne.votes,
      ...question.optionTwo.votes,
    ];
    const answered = aggregatedQuestionVotes.includes(authUser);

    const { id, timestamp } = question;
    const { avatarURL, name } = user;

    return (
      <div>
        <h1>Would you Rather...</h1>
        <div to={`/question/${id}`} className="question-details">
          <div className="item-info">
            <div className="itemAvatar">
              <img
                src={avatarURL}
                alt={`avatar of ${name}`}
                className="avatar"
              />
            </div>
            <div className="info">
              <span>
                <strong>{name}</strong>
              </span>
              <div>{formatDate(timestamp)}</div>
            </div>
          </div>
          <Question questionId={id} answered={answered} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authUser }, props) {
  const { id } = props.match.params; // passed by router
  const question = questions[id] ? questions[id] : null;
  const user = question ? users[question.author] : null;

  return {
    authUser,
    question,
    user,
  };
}


export default withRouter(
  connect(mapStateToProps)(QuestionPage)
);
