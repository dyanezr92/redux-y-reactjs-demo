import { combineReducers } from 'redux'
import commentsReducer from './commentsReducer'
import complaintsReducer from './complaintsReducer'

export default combineReducers({
  comments: commentsReducer,
  complaints: complaintsReducer
})
