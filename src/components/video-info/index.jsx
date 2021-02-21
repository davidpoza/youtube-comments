import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

// own
import ChannelInfo from '../channel-info';
import useStyles from './useStyles';

export default function VideoInfo(props) {
  const classes = useStyles();
  const {
    title, date, userImage, userLink, userName, userSubsCount,
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
      <ChannelInfo
        userImage={userImage}
        userName={userName}
        userLink={userLink}
        userSubsCount={userSubsCount}
      />
    </>
  );
}

VideoInfo.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  userImage: PropTypes.string, // channel image url
  userLink: PropTypes.string, // channel link
  userName: PropTypes.string, // channel name
  userSubsCount: PropTypes.string, // channel subscribers
  videoId: PropTypes.string,
};
