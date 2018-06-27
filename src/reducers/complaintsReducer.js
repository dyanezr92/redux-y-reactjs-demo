import userTextListReducer from './userTextListReducer'

const complaintsReducer = userTextListReducer({
  addElement: "ADD_COMPLAINT",
  deleteElement: "DELETE_COMPLAINT"
});

export default complaintsReducer;

export const getComplaints = state => state.complaints;
