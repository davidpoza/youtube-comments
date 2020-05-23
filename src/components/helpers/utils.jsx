import moment from 'moment';

/* eslint-disable import/prefer-default-export */
export function videoUrlIsValid(url) {
  const regex = /(?:https:\/\/(?:www\.)?)?youtube.com\/watch\?v=([A-Za-z0-9-_]*)/;
  const result = url.match(regex);
  return (result ? result[1] : false);
}

export function formatSubsCount(subs) {
  if (subs >= 1000000) {
    return (`${subs / 1000000}M`);
  }
  if (subs >= 1000) {
    return (`${Math.ceil(subs / 1000)}K`);
  }
  return (subs);
}

export function sortCommentsByDate(a, b) {
  const dateA = moment(a.publishedDate);
  const dateB = moment(b.publishedDate);
  if (dateA.isBefore(dateB)) {
    return (1);
  }
  if (dateB.isBefore(dateA)) {
    return (-1);
  }
  return (0);
}

/* eslint-enable import/prefer-default-export */
