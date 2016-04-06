import { combineReducers } from "redux";
import { ADD_COMMENT, FETCH_IMAGE, LOAD_IMAGE } from "app/actions";

const initialState = {
  image: {
    src: null,
    loading: false
  },
  comments: []
}

function imageReducer(image = initialState.image, action) {
  switch (action.type) {
    case FETCH_IMAGE:
      return {
        ...image,
        loading: true
      };

    case LOAD_IMAGE:
      return {
        src: action.image.src,
        loading: false
      };

    default:
      return image;
  }
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
  image: imageReducer,
  comments: commentsReducer
});
