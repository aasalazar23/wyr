import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { formatDate } from "../utils/helpers";
import { handleSaveAnswer } from "../actions/shared";
import Question from "../components/Question"
import Votes from "./Votes";

class QuestionPage extends Component {
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
    const { question, user, authUser } = this.props;

    // if user routes to non existent question ID
    if (question === null) {
      return <Redirect to='/notfound'></Redirect>;
    }

    const aggregatedQuestionVotes = [
      ...question.optionOne.votes,
      ...question.optionTwo.votes,
    ];
    const answered = aggregatedQuestionVotes.includes(authUser);


    const { id, timestamp} = question;
    const { avatarURL, name } = user;

    return (
      <div>
        <h3>Would you Rather...</h3>
        <div to={`/question/${id}`} className="question-details">
          <div className="item-info">
            <div className="itemAvatar">
              <img src={avatarURL} alt={`avatar of ${name}`} className="avatar" />
            </div>
            <div className="info">
              <span>
                <strong>{name}</strong>
              </span>
              <div>{formatDate(timestamp)}</div>
            </div>
          </div>
          <Question questionId={id} answered={answered}/>

        </div>
      </div>

    );
  }
}

function mapStateToProps({ questions, users, authUser }, props) {
  //TODO: check if authUser has voted, if so, disable button, render votes
  const { id } = props.match.params // passed by router
  const question = questions[id] ? questions[id] : null;
  const user = question ? users[question.author] : null;


  return {
    authUser,
    question,
    user,

  };
}
export default withRouter(connect(mapStateToProps)(QuestionPage));
