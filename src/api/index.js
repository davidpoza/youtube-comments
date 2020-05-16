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
  channels: {
    list(channelId) {
      const q = [
        config.apiBaseUrl,
        'part=snippet',
        `&id=${channelId}`,
      ].join('');
      return (Promise.resolve(mockListChannels));
    },
  },
};
