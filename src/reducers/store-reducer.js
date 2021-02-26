export default function reducer(state, action) {
  const newHistory = { ...state.history };
  const newStatisticsHistory = { ...state.statisticsHistory };
  console.log(action.type, "antes-->", newStatisticsHistory)
  switch (action.type) {
    case 'SIGNUP_ATTEMPT':
      return {
        ...state, loading: true, error: false,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state, loading: false, msg: action.payload.msg,
      };
    case 'SIGNUP_FAIL':
      return {
        ...state, loading: false, error: true, msg: action.payload.msg,
      };
    case 'LOGIN_ATTEMPT':
      return {
        ...state, user: undefined, loading: true, error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state, loading: false, user: action.payload,
      };
    case 'LOGIN_FAIL':
      return {
        ...state, loading: false, error: true, msg: action.payload.msg,
      };
    case 'LOGOUT':
      return {
        ...state, loading: false, error: false, user: undefined, history: {},
      };
    case 'GET_COMMENTS_ATTEMPT':
      return {
        ...state, loading: true, error: false, lastSearchId: undefined,
      };
    case 'GET_COMMENTS_SUCCESS':
      newHistory[action.payload.id] = { ...action.payload };
      return {
        ...state, history: newHistory, loading: false, lastSearchId: action.payload.id,
      };
    case 'GET_COMMENTS_FAIL':
      return {
        ...state, loading: false, error: true, msg: action.payload.msg,
      };
    case 'GET_CHANNEL_STATISTICS_ATTEMPT':
      return {
        ...state, loading: true, error: false, lastChannelSearchId: undefined,
      };
    case 'GET_CHANNEL_STATISTICS_SUCCESS':
      newStatisticsHistory[action.payload.id] = action.payload;
      return {
        ...state, statisticsHistory: newStatisticsHistory, loading: false, lastChannelSearchId: action.payload.id,
      };
    case 'GET_CHANNEL_STATISTICS_FAIL':
      return {
        ...state, loading: false, error: true, msg: action.payload.msg,
      };
    case 'CLEAN_ALERT_BAR':
      return {
        ...state, msg: '',
      };
    case 'CLEAN_LAST_SEARCH_ID':
      return {
        ...state, lastSearchId: undefined,
      };
    case 'REMOVE_COMMENTS_SEARCH':
      if (newHistory[action.payload.id]) {
        delete newHistory[action.payload.id];
      }
      return {
        ...state, history: newHistory,
      };
    case 'REMOVE_STATISTICS_SEARCH':
      if (newStatisticsHistory[action.payload.id]) {
        delete newStatisticsHistory[action.payload.id];
      }
      return {
        ...state, statisticsHistory: newStatisticsHistory,
      };
    default:
      return state;
  }
}
