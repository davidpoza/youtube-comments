import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import useStyles from './useStyles';

export default function VideoInfo(props) {
  const classes = useStyles();
  const {
    userImage, userLink, userName, userSubsCount,
  } = props;

  return (
    <div className={classes.channelInfo}>
      <Avatar className="avatar" src={userImage} />
      <div>
        <Typography className="channelName" variant="h1" component="a" href={userLink}>
          {userName}
        </Typography>
        <Typography className="subsCount" variant="subtitle1">
          {`${userSubsCount} subscribers`}
        </Typography>
      </div>
    </div>
  );
}

VideoInfo.propTypes = {
  userImage: PropTypes.string, // channel image url
  userLink: PropTypes.string, // channel link
  userName: PropTypes.string, // channel name
  userSubsCount: PropTypes.string, // channel subscribers
};
