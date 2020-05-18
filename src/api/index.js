import fetch from 'isomorphic-fetch';
import config from '../config';
import mockSearchComments from './mocks/search-comments';
import mockListVideos from './mocks/list-videos';
import mockListChannels from './mocks/list-channel';


export default {
  user: {

  },
  comments: {
    search(videoId, keywords) {
      const q = [
        config.apiBaseUrl,
        'commentThreads',
        `?key=${process.env.REACT_APP_API_KEY}&`,
        'part=id,replies,snippet',
        `&videoId=${videoId}`,
        '&textFormat=plainText',
        '&maxResults=100',
        `&searchTerms=${keywords}`, // TODO: encode
      ].join('');
      return (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve(mockSearchComments) : fetch(q));
    },
  },
  videos: {
    list(videoId) {
      const q = [
        config.apiBaseUrl,
        'videos',
        `?key=${process.env.REACT_APP_API_KEY}&`,
        'part=snippet',
        `&id=${videoId}`,
      ].join('');
      return (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve(mockListVideos) : fetch(q));
    },
  },
  channels: {
    list(channelId) {
      const q = [
        config.apiBaseUrl,
        'channels',
        `?key=${process.env.REACT_APP_API_KEY}&`,
        'part=snippet,statistics',
        `&id=${channelId}`,
      ].join('');
      return (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve(mockListChannels) : fetch(q));
    },
  },
};
