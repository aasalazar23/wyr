import { RECEIVE_USERS } from "../actions/users";
import { SAVE_QUESTION_ANSWER } from "../actions/shared";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_QUESTION_ANSWER:
      debugger
      return {
        ...state, // spread question slice of state
        [action.authUser]: { // modify specified user from key
          ...state[action.authUser], // spread the specified user
          answers: {
            // modify the specified option
            ...state[action.authUser].answers, //{action.qid: action.option}// spread the answers
            [action.qid]: action.answer//answers: state[action.authUser].answers.concat({action.qid: action.option}),
          },
        },
      };
    default:
      return state;
  }
}
