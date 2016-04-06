import api from "app/api";

export const FETCH_IMAGE = "FETCH_IMAGE";
export const LOAD_IMAGE = "LOAD_IMAGE";
export const ADD_COMMENT = "ADD_COMMENT";

export function fetchImage(src) {
  return function(dispatch)  {
    dispatch({
      type: FETCH_IMAGE
    });

    api.loadImage(src).then(image => dispatch(loadImage(image)));
  }
}

export function loadImage(image) {
  return {
    type: LOAD_IMAGE,
    image
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}
