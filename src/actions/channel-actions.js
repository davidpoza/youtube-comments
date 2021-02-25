import moment from 'moment';
import { v4 as uuid } from 'uuid';
import get from 'lodash.get';
import api from '../api';
import createChannel from '../models/channel';


/* eslint-disable import/prefer-default-export */
export function fetchChannelStatistics(dispatch, { channelId, token }) {
  const channel = createChannel({
    id: channelId,
  });
  dispatch({
    type: 'GET_CHANNEL_STATISTICS_ATTEMPT',
  });
  api.channels.findVideos(channelId, token)
    .then((res) => (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve(res) : res.json()))
    .then((data) => {
      if (data) {
        channel.videos = data.videos;
        channel.title = data.author;
        channel.url = data.authorUrl;
        channel.subscriberCount = data.subscriberCount;
        channel.thumbnailUrl = data.authorThumbnails[0].url;
        dispatch({
          type: 'GET_CHANNEL_STATISTICS_SUCCESS',
          payload: channel,
        });
      } else {
        return Promise.reject(new Error('Channel does not exist'));
      }
    })
    .catch((err) => {
      dispatch({
        type: 'GET_CHANNEL_STATISTICS_FAIL',
        payload: { msg: `Error fetching: ${err.message}` },
      });
    });
}

export function removeSearch(dispatch, { searchId }) {
  dispatch({
    type: 'REMOVE_STATISTICS_SEARCH',
    payload: { id: searchId },
  });
}
/* eslint-enable import/prefer-default-export */
