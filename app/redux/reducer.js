import { combineReducers } from 'redux'

import auth from './ducks/auth'
import users from './ducks/users'
import restaurants from './ducks/restaurants'
import currentRestaurant from './ducks/currentRestaurant'
import reviews from './ducks/reviews'


export default combineReducers({
  auth,
  users,
  restaurants,
  currentRestaurant,
  reviews
})
