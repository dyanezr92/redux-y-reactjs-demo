const userTextListReducer = (supportedActions) => (state = [], action) => {
  if (action.type === supportedActions.addElement) {
    return [
      ...state,
      {
        id: action.id,
        author: action.author,
        text: action.text,
      },
    ];
  }

  if (action.type === supportedActions.deleteElement) {
    return state.filter(userText => action.id !== userText.id);
  }

  return state;
}

export default userTextListReducer
