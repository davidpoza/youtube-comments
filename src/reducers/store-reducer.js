export default function reducer(state, action) {
  const newHistory = { ...state.history };
  switch (action.type) {
    case 'ADD_URL':
      newHistory[action.payload.id] = { ...action.payload };
      return { ...state, history: newHistory };
    default:
      return state;
  }
}
