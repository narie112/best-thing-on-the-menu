/*----------  INITIAL STATE  ----------*/
export const initialState = []


/*----------  ACTION TYPES  ----------*/
const RECEIVE_USERS = 'RECEIVE_USERS'


/*----------  ACTIONS  ----------*/
export const actions = {
  signIn: users => (
    { type: RECEIVE_USERS,
      users
    })
}


/*----------  REDUCER  ----------*/
const reducer =  {
  [RECEIVE_USERS]: users => ({ ...users })
}


import { createReducer } from '../../utils'
export default createReducer(initialState, reducer)
