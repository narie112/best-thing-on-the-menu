/*----------  INITIAL STATE  ----------*/
export const initialState = [{ id: 1, name: 'Toastees' }, { id: 2, name: 'Essen' }, { id: 3, name: 'Go-Go Curry' }]


/*----------  ACTION TYPES  ----------*/
const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS'
const ADD_RESTAURANT = 'ADD_RESTAURANT'


/*----------  ACTIONS  ----------*/
export const actions = {
  // Action Creators
  signIn: restaurants => (
    { type: RECEIVE_RESTAURANTS,
      restaurants
    }),
  addRestaurant: restaurant => (
    { type: RECEIVE_RESTAURANT,
      restaurant
    })
}


/*----------  REDUCER  ----------*/
const reducer =  {
  [RECEIVE_RESTAURANTS]: (state, action) => ([ ...action.restaurants ]),
  [ADD_RESTAURANT]: (state, action) => ([ ...state, action.restauarant ])
}


import { createReducer } from '../../utils'
export default createReducer(initialState, reducer)
