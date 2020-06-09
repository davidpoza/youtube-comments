import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Comment from '../comment';
import { sortCommentsByDate } from '../helpers/utils';
import { propTypes as commentPropTypes } from '../../models/comment';
import useStyles from './useStyles';

export default function Replies(props) {
  const { replies = [] } = props;
  const count = replies.length;
  const [open, setOpen] = useState(false);
  const [btnText, setBtnText] = useState(`View ${count} ${count > 1 ? 'replies' : 'reply'}`);
  const classes = useStyles();
  const toggle = useCallback(() => {
    setBtnText(open ? `View ${count} ${count > 1 ? 'replies' : 'reply'}` : 'Hide replies');
    setOpen(!open);
  }, [setBtnText, setOpen, open, count]);
  if (replies) {
    return (
      <div>
        <div>
          {
            open && replies
              .sort(sortCommentsByDate)
              .map((r) => (
                <Comment
                  key={r.id}
                  isReply
                  text={r.text}
                  authorImage={r.authorImage}
                  authorName={r.authorName}
                  authorUrl={r.authorUrl}
                  publishedDate={r.publishedDate}
                />
              ))
          }
        </div>
        {
          count > 0 && (
            <Button
              onClick={toggle}
              size="small"
              className={classes.showMore}
              startIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            >
              {btnText}
            </Button>
          )
        }
      </div>
    );
  }
  return (null);
}

Replies.propTypes = {
  replies: PropTypes.arrayOf(
    PropTypes.shape(commentPropTypes),
  ),
};
