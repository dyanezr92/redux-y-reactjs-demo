import complaintsReducer from '../../reducers/complaintsReducer';
import { addComplaint, deleteComplaint } from '../../actions/index';

describe('complaints reducer', () => {
  it('should return the initial state', () => {
    expect(complaintsReducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_COMPLAINT', () => {
    const addAction = addComplaint({
      author: 'Finn',
      text: 'Complaint example'
    });
    expect(complaintsReducer([], addAction)).toEqual([{"author": "Finn", "id": 0, "text": "Complaint example"}]);
  });

  it('should handle DELETE_COMPLAINT', () => {
    const deleteAction = deleteComplaint(0);
    expect(complaintsReducer([{"author": "Finn", "id": 0, "text": "Complaint example"}], deleteAction)).toEqual([]);
  });
});
