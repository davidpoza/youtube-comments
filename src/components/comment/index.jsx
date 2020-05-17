import React, { useState, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import get from 'lodash.get';
import clsx from 'clsx';
import useStyles from './useStyles';

export default function Comment(props) {
  const {
    authorImage,
    authorName,
    authorUrl,
    isReply,
    publishedDate,
    text,
  } = props;
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [isLongComment, setIsLongComment] = useState(false);
  const [btnText, setBtnText] = useState('Read more');
  const toggle = useCallback(() => {
    setBtnText(open ? 'Read more' : 'Show less');
    setOpen(!open);
  });
  const classes = useStyles();

  useEffect(() => {
    const height = get(ref, 'current.clientHeight', 0);
    setIsLongComment(height >= 80);
  }, [ref]);

  return (
    <div className={clsx({
      [classes.root]: true,
      [classes.reply]: isReply,
    })}
    >
      <Avatar className="avatar" src={authorImage} />
      <div className="content">
        <div>
          <Typography className="channelName" variant="subtitle1" component="a" href={authorUrl}>
            {authorName}
          </Typography>
          <Typography className="date" variant="subtitle1" component="span">
            {moment(publishedDate).fromNow()}
          </Typography>
        </div>
        <div
          ref={ref}
          className={clsx({
            [classes.dropDown]: true,
            [classes.dropDownOpen]: open && isLongComment,
            [classes.dropDownClose]: !open && isLongComment,
          })}
        >
          <Typography className="body" variant="body1">
            {text}
          </Typography>
        </div>
        {
          isLongComment && <Link
            component="button"
            onClick={toggle}
            underline="none"
            className={classes.showMore}
          >
            {btnText}
          </Link>
        }
      </div>
    </div>
  );
}

Comment.propTypes = {
  authorImage: PropTypes.string,
  authorName: PropTypes.string,
  authorUrl: PropTypes.string,
  isReply: PropTypes.bool,
  publishedDate: PropTypes.string,
  text: PropTypes.string,
};

Comment.defaultProps = {
  isReply: false,
};
