import moment from 'moment';
import { v4 as uuid } from 'uuid';
import get from 'lodash.get';
import api from '../api';
import createSearch from '../models/search';

/* eslint-disable import/prefer-default-export */
export function fetchComments(dispatch, { videoId, keywords }) {
  const search = createSearch({
    id: uuid(),
    date: moment().format('DD-MM-YYYY HH:mm'),
    videoId,
    videoTitle: 'temporal title',
    keywords,
  });
  dispatch({
    type: 'GET_COMMENTS_ATTEMPT',
  });
  api.videos.list(videoId)
    .then((data) => {
      if (data.items.length > 0) {
        search.videoTitle = get(data.items[0], 'snippet.title');
        search.videoDescription = get(data.items[0], 'snippet.description');
        search.videoDate = get(data.items[0], 'snippet.publishedAt');
        search.userLink = `https://youtube.com/channel/${get(data.items[0], 'snippet.channelId')}/videos`;
        search.userName = get(data.items[0], 'snippet.channelTitle');
        search.imageLink = get(data.items[0], 'snippet.thumbnails.default.url');
        search.imageWidth = get(data.items[0], 'snippet.thumbnails.default.width');
        search.imageHeight = get(data.items[0], 'snippet.thumbnails.default.height');
        return (api.comments.search(videoId, keywords));
      }
      return Promise.reject(new Error('Video does not exist'));
    })
    .then((data) => {
      search.totalResults = get(data, 'pageInfo.totalResults');
      return (api.channels.list(videoId, keywords));
    })
    .then((data) => {
      search.userImage = get(data.items[0], 'snippet.thumbnails.default.url');
      search.userSubs = get(data.items[0], 'statistics.subscriberCount');
      dispatch({
        type: 'GET_COMMENTS_SUCCESS',
        payload: search,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'GET_COMMENTS_FAIL',
        payload: { msg: `Error fetching: ${err.message}` },
      });
    });
}


export function cleanAlertBar(dispatch) {
  dispatch({
    type: 'CLEAN_ALERT_BAR',
  });
}

export function removeSearch(dispatch, { searchId }) {
  dispatch({
    type: 'REMOVE_SEARCH',
    payload: { id: searchId },
  });
}
/* eslint-enable import/prefer-default-export */
