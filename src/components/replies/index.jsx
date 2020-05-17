import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment';
import { sortCommentsByDate } from '../helpers/utils';
import { propTypes as commentPropTypes } from '../../models/comment';

export default function Replies(props) {
  const { replies } = props;
  if (replies) {
    return (
      <div>
        {
          replies
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
    );
  }
  return (null);
}

Replies.propTypes = {
  replies: PropTypes.arrayOf(
    PropTypes.shape(commentPropTypes),
  ),
};
