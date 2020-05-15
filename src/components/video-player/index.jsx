import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

export default function VideoPlayer(props) {
  const classes = useStyles();
  const { title, date, videoId } = props;
  return (
    <div>
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
      <Typography className={classes.title} variant="h1">
        {title}
      </Typography>
      <h2>
        {date}
      </h2>
    </div>
  );
}

VideoPlayer.propTypes = {
  videoId: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  userName: PropTypes.string, // channel name
  userLink: PropTypes.string, // chanel link
};
