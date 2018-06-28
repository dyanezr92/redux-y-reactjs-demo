import commentsReducer from '../../reducers/commentsReducer';
import { addComment, deleteComment } from '../../actions/index';

describe('comments reducer', () => {
  it('should return the initial state', () => {
    expect(commentsReducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_COMMENT', () => {
    const addAction = addComment({
      author: 'Finn',
      text: 'Comment example'
    });
    expect(commentsReducer([], addAction)).toEqual([{"author": "Finn", "id": 0, "text": "Comment example"}]);
  });

  it('should handle DELETE_COMMENT', () => {
    const deleteAction = deleteComment(0);
    expect(commentsReducer([{"author": "Finn", "id": 0, "text": "Comment example"}], deleteAction)).toEqual([]);
  });
});
