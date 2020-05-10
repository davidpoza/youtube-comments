/* eslint-disable import/prefer-default-export */
export function videoUrlIsValid(url) {
  const regex = /(?:https:\/\/(?:www\.)?)?youtube.com\/watch\?v=([A-Za-z0-9-_]*)/;
  const result = url.match(regex);
  return (result ? result[1] : false);
}
/* eslint-enable import/prefer-default-export */
