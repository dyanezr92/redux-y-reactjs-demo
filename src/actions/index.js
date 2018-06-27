let nextCommentId = 0;
export const addComment = ({author, text}) => ({
    type: 'ADD_COMMENT',
    id: nextCommentId++,
    author,
    text
});

let nextComplaintId = 0;
export const addComplaint = ({author, text}) => ({
    type: 'ADD_COMPLAINT',
    id: nextComplaintId++,
    author,
    text
});

export const deleteComment = id =>  ({
  type: 'DELETE_COMMENT',
  id
});

export const deleteComplaint = id =>  ({
  type: 'DELETE_COMPLAINT',
  id
});
