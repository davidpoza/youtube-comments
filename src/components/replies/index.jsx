import React from 'react';
import Comment from '../comment';
import { sortCommentsByDate } from '../helpers/utils';

export default function Replies(props) {
  const { replies } = props;
  if (replies) {
    return (
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
    );
  }
  return (null);
}
