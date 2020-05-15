import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

export default function VideoInfo(props) {
  const classes = useStyles();
  const { title, date } = props;
  return (
    <>
      <Typography className={classes.title} variant="h1">
        {title}
      </Typography>
      <Typography className={classes.date} variant="h2">
        {date}
      </Typography>
    </>
  );
}

VideoInfo.propTypes = {
  videoId: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  userName: PropTypes.string, // channel name
  userLink: PropTypes.string, // chanel link
};
