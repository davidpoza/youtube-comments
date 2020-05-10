import fetch from 'isomorphic-fetch';
import config from '../config';
import mockSearchComments from './mocks/search-comments';
import mockListVideos from './mocks/list-videos';

export default {
  user: {

  },
  comments: {
    search(videoId, keywords) {
      const q = [
        config.apiBaseUrl,
        'part=replies,snippet',
        `&videoId=${videoId}`,
        '&textFormat=plainText',
        '&maxResults=100',
        `&searchTerms=${keywords}`, // TODO: encode
      ].join('');
      return (Promise.resolve(mockSearchComments));
    },
  },
  videos: {
    list(videoId) {
      const q = [
        config.apiBaseUrl,
        'part=snippet',
        `&id=${videoId}`,
      ].join('');
      return (Promise.resolve(mockListVideos));
    },
  },
};
