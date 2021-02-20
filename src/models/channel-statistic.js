import PropTypes from 'prop-types';

export default function createChannelStatistic({
  id,
  title,
  thumbnail,
  viewCount,
}) {
  return ({
    id,
    title,
    thumbnail,
    viewCount,
  });
}
