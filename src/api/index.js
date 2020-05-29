import fetch from 'isomorphic-fetch';
import config from '../config';
import mockSearchComments from './mocks/search-comments';
import mockListVideos from './mocks/list-videos';
import mockListChannels from './mocks/list-channel';


export default {
  user: {
    login(email, password) {
      const q = [
        process.env.REACT_APP_API_URL,
        '/api/auth',
        '/authenticate',
      ].join('');
      const opt = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      };
      return (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve({}) : fetch(q, opt));
    },
    register(email, password) {
      const q = [
        process.env.REACT_APP_API_URL,
        '/api/auth',
        '/register',
      ].join('');
      const opt = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      };
      return (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve({}) : fetch(q, opt));
    },
    getUserInfo(token) {
      const q = [
        process.env.REACT_APP_API_URL,
        '/api/users/me',
      ].join('');
      const opt = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      return (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve({}) : fetch(q, opt));
    },
  },
  comments: {
    search(videoId, keywords) {
      const q = [
        process.env.REACT_APP_API_URL,
        'commentThreads',
        `?key=${process.env.REACT_APP_API_URL}&`,
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
        process.env.REACT_APP_API_URL,
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
        process.env.REACT_APP_API_URL,
        'channels',
        `?key=${process.env.REACT_APP_API_KEY}&`,
        'part=snippet,statistics',
        `&id=${channelId}`,
      ].join('');
      return (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve(mockListChannels) : fetch(q));
    },
  },
};
