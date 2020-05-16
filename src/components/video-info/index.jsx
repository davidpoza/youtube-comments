import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import useStyles from './useStyles';

export default function VideoInfo(props) {
  const classes = useStyles();
  const {
    title, date, userImage, userName, userSubsCount,
  } = props;
  // 2020-04-28T02:27:29Z
  const formatedDate = moment(date).format('DD MMM, YYYY');
  return (
    <>
      <div className={classes.videoInfo}>
        <Typography className="title" variant="h1">
          {title}
        </Typography>
        <Typography className="date" variant="subtitle1">
          {formatedDate}
        </Typography>
      </div>
      <div className={classes.channelInfo}>
        <Avatar className="avatar" src={userImage} />
        <div>
          <Typography className="channelName" variant="h1" component="span">
            {userName}
          </Typography>
          <Typography className="subsCount" variant="subtitle1">
            {`${userSubsCount} subscribers`}
          </Typography>
        </div>
      </div>
    </>
  );
}

VideoInfo.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  userImage: PropTypes.string, // channel image url
  userLink: PropTypes.string, // channel link
  userName: PropTypes.string, // channel name
  userSubsCount: PropTypes.number, // channel subscribers
  videoId: PropTypes.string,
};
