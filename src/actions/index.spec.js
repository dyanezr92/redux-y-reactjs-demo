import * as actions from './index'

describe('comments and complaints actions', () => {
  it('addComment should create ADD_COMMENT action', () => {
    expect(actions.addComment('Finn', 'Use Redux')).toEqual({
      type: 'ADD_COMMENT',
      id: 0,
      author: 'Finn',
      text: 'Use Redux'
    })
  })

  it('addComplaint should create ADD_COMPLAINT action', () => {
    expect(actions.addComplaint('Finn', 'Use Redux')).toEqual({
      type: 'ADD_COMPLAINT',
      id: 0,
      author: 'Finn',
      text: 'Use Redux'
    })
  })

  it('deleteComment should create DELETE_COMMENT action', () => {
    expect(actions.deleteComment(1)).toEqual({
      type: 'DELETE_COMMENT',
      id: 1
    })
  })

  it('deleteComplaint should create DELETE_COMPLAINT action', () => {
    expect(actions.deleteComplaint(1)).toEqual({
      type: 'DELETE_COMPLAINT',
      id: 1
    })
  })
})
