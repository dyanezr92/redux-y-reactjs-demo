import userTextListReducer from './userTextListReducer'

const commentsReducer = userTextListReducer({
  addElement: "ADD_COMMENT",
  deleteElement: "DELETE_COMMENT"
});

export default commentsReducer;

export const getComments = state => state.comments;
