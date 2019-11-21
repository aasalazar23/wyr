import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "../components/Tabs";
import Question from "./Question";
import { debuggerStatement } from "@babel/types";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Questions</h3>
        <Tabs>
          <div label="Answered">
            <ul>
              {this.props.answeredQuestionsIds.map(id => (
                <li key={id}>
                  <Question questionId={id} />
                </li>
              ))}
            </ul>
          </div>
          <div label="New Questions">
            <ul>
              {/* {this.props.unansweredQuestionsIds.map(id => (
                <li key={id}>
                  <Question questionId={id} />
                </li>
              ))} */}
            </ul>
          </div>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ questions, authUser }) {
  const sortQuestions = questions => {
    debugger
    return questions.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );
  };
  const aggregatedQuestionVotes = question => [
    ...question.optionOne.votes,
    ...question.optionTwo.votes,
  ];

  const questionList = Object.values(questions);

  const filteredAnswers = questionList.filter(question =>
    aggregatedQuestionVotes(question).includes(authUser)
  );
  // const filteredUnanswered = questionList.filter(
  //   question => !aggregatedQuestionVotes(question).includes(authUser)
  // );

  const answeredQuestions = sortQuestions(filteredAnswers);
  // const unansweredQuestions = sortQuestions(filteredUnanswered);

  return {
    answeredQuestionsIds: answeredQuestions.map(q => q.id),
    // unansweredQuestionsIds: unansweredQuestions(q => q.id),
  };
}

export default connect(mapStateToProps)(HomePage);
