import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import useStyles from './useStyles';

export default function Comment(props) {
  const {
    authorImage,
    authorName,
    authorUrl,
    publishedDate,
    text,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar className="avatar" src={authorImage} />
      <div className="content">
        <div>
          <Typography className="channelName" variant="subtitle1" component="span">
            {authorName}
          </Typography>
          <Typography className="date" variant="subtitle1" component="span">
            {moment(publishedDate).fromNow()}
          </Typography>
        </div>
        <Typography className="body" variant="body1">
          {text}
        </Typography>
      </div>
    </div>
  );
}

Comment.propTypes = {
  authorImage: PropTypes.string,
  authorName: PropTypes.string,
  authorUrl: PropTypes.string,
  publishedDate: PropTypes.string,
  text: PropTypes.string,
};
