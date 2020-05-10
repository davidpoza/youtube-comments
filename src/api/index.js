import fetch from 'isomorphic-fetch';
import mockGetComments from './mocks/get-comments';
import config from '../config';

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
      return (Promise.resolve(mockGetComments));
    },
  },
};
