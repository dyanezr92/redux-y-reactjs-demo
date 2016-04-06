import { combineReducers } from "redux";
import { ADD_COMMENT } from "app/actions";

const initialState = {
  comments: []
}

function commentsReducer(comments = initialState.comments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [ ...comments, action.comment ];
    default:
      return comments;
  }
}

export default combineReducers({
  comments: commentsReducer
});
