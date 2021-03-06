import fetch from 'isomorphic-fetch';
import config from '../config';
import mockSearchComments from './mocks/search-comments';
import mockListVideos from './mocks/list-videos';
import mockListChannels from './mocks/list-channel';
import mockRelatedChannels from './mocks/related-channels';

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
    search(videoId, keywords, token) {
      const q = [
        process.env.REACT_APP_API_URL,
        '/api/videos/',
        `${videoId}/`,
        'comments',
        `?keywords=${keywords}`, // TODO: encode
      ].join('');
      const opt = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      return (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve(mockSearchComments) : fetch(q, opt));
    },
  },
  videos: {
    list(videoId, token) {
      const q = [
        process.env.REACT_APP_API_URL,
        '/api/videos/',
        `${videoId}`,
      ].join('');
      const opt = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      return (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve(mockListVideos) : fetch(q, opt));
    },
  },
  channels: {
    list(channelId, token) {
      const q = [
        process.env.REACT_APP_API_URL,
        '/api/channels/',
        `${channelId}`,
      ].join('');
      const opt = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      return (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve(mockListChannels) : fetch(q, opt));
    },
    findVideos(channelId, token) {
      const q = [
        process.env.REACT_APP_API_URL,
        '/api/channels/',
        `${channelId}`,
        '/find-videos',
      ].join('');
      const opt = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      return (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve(mockListChannels) : fetch(q, opt));
    },
    findRelatedChannels(channelId, token) {
      const q = [
        process.env.REACT_APP_API_URL,
        '/api/channels/',
        `${channelId}`,
        '/find-related',
      ].join('');
      const opt = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      return (process.env.REACT_APP_DEBUG === 'true' ? Promise.resolve(mockRelatedChannels) : fetch(q, opt));
    },
  },
};
