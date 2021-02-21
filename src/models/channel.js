import PropTypes from 'prop-types';

export default function createChannel({
  id,
  title,
  url,
  subscriberCount,
  thumbnailUrl,
}) {
  return ({
    id,
    title,
    url,
    subscriberCount,
    thumbnailUrl,
    videos: [], // has models/channel-statistic as values
  });
}
