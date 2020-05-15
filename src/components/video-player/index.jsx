import React from 'react';
import useStyles from './useStyles';

export default function VideoPlayer() {
  const classes = useStyles();
  return (
    <div className={classes.videoPreview}>
      <iframe
        title="video player"
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
        frameBorder="0"
      />
    </div>
  );
}
