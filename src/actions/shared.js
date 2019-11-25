import { fetchInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";


export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function handleInitialData() {
  return dispatch => {
    return fetchInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

function saveQuestionAction({ authUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authUser,
    qid,
    answer,
  };
}

export function handleSaveAnswer(info) {
  return dispatch => {
    //optimistic render locally
    dispatch(saveQuestionAction(info));


    // attempt save to db
    return saveQuestionAnswer(info).catch(e => {
      console.warn("Error occured saving answer: ", e);
      info.answer = null;
      dispatch(saveQuestionAction(info));
      alert("There was an error saving your answer, please try again soon");
    });
  };
}

function addQuestionAction(question, authUser) {
  return {
    type: ADD_QUESTION,
    question,
    authUser,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authUser } = getState();

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authUser,
    }).then(question => dispatch(addQuestionAction(question, authUser)));
  };
}
