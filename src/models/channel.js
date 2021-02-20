import PropTypes from 'prop-types';

export default function createChannel({
  id,
}) {
  return ({
    id,
    videos: [] // has models/channel-statistic as values
  });
}
