import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import useStyles from './useStyles';

export default function VideoInfo(props) {
  const classes = useStyles();
  const { title, date } = props;
  // 2020-04-28T02:27:29Z
  const formatedDate = moment(date).format('DD MMM, YYYY');
  return (
    <>
      <Typography className={classes.title} variant="h1">
        {title}
      </Typography>
      <Typography className={classes.date} variant="subtitle1">
        {formatedDate}
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
