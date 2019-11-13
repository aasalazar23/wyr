import { fetchInitialData } from "../utils/api"
import { receiveUsers } from "./users"
import { receiveQuestions } from "./questions"
import { setAuthUser } from "./authUser"

const tmpAuthUser = 'aSalazar'

export function handleInitialData() {
  return (dispatch) => {
    return fetchInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(setAuthUser(tmpAuthUser))
    })
  }
}