import { RECEIVE_QUESTIONS } from "../actions/questions"
import { SAVE_QUESTION_ANSWER, ADD_QUESTION } from "../actions/shared"

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION_ANSWER :
      return {
        ...state, // spread question slice of state
        [action.qid] : { // modify specified question from key
          ...state[action.qid], // spread the specified question
            [action.answer] : { // modify the specified option
              ...state[action.qid][action.answer], // spread the option
              votes: state[action.qid][action.answer].votes.concat([action.authUser])
            }
        }
      }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    default :
    return state
  }
}
