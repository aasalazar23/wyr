import { fetchInitialData, saveQuestionAnswer } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthUser } from "./authUser";

const tmpAuthUser = "aSalazar";

export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function handleInitialData() {
  return dispatch => {
    return fetchInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthUser(tmpAuthUser));
    });
  };
}

export function saveQuestion({ authUser, qid, answer }) {
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
    dispatch(saveQuestion(info));


    // attempt save to db
    return saveQuestionAnswer(info).catch(e => {
      console.warn("Error occured saving answer: ", e);
      info.answer = null;
      dispatch(saveQuestion(info));
      alert("There was an error saving your answer, please try again soon");
    });
  };
}
