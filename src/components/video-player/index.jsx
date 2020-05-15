import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './useStyles';

export default function VideoPlayer(props) {
  const classes = useStyles();
  const { videoId } = props;
  return (
    <div className={classes.videoPreview}>
      <iframe
        title="video player"
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
      />
    </div>
  );
}

VideoPlayer.propTypes = {
  videoId: PropTypes.string,
};
