import moment from 'moment';
import { v4 as uuid } from 'uuid';
import api from '../api';

/* eslint-disable import/prefer-default-export */
export function fetchComments(dispatch) {
  dispatch({
    type: 'GET_COMMENTS_ATTEMPT',
  });
  api.comments.search()
    .then((data) => {
      dispatch({
        type: 'GET_COMMENTS_SUCCESS',
        payload: { id: uuid(), date: moment().format('DD-MM-YYYY HH:mm'), content: 'hola' },
      });
    })
    .catch((err) => {
      dispatch({
        type: 'GET_COMMENTS_FAIL',
        payload: { msg: `Error fetching: ${err.msg}` },
      });
    });
}

/* eslint-enable import/prefer-default-export */
