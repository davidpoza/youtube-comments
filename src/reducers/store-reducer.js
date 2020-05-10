export default function reducer(state, action) {
  const newHistory = { ...state.history };
  switch (action.type) {
    case 'GET_COMMENTS_ATTEMPT':
      return {
        ...state, loading: true, error: false,
      };
    case 'GET_COMMENTS_SUCCESS':
      newHistory[action.payload.id] = { ...action.payload };
      return { ...state, history: newHistory, loading: false };
    case 'GET_COMMENTS_FAIL':
      return {
        ...state, loading: false, error: true, msg: action.payload.msg,
      };
    default:
      return state;
  }
}
