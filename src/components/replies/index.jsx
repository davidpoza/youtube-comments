import React from 'react';
import moment from 'moment';
import Comment from '../comment';

export default function Replies(props) {
  const { replies } = props;
  if (replies) {
    return (
      replies
        .sort((a, b) => {
          const dateA = moment(a.publishedDate);
          const dateB = moment(b.publishedDate);
          if (dateA.isBefore(dateB)) {
            return (-1);
          }
          if (dateB.isBefore(dateA)) {
            return (1);
          }
          return (0);
        })
        .map((r) => (
          <Comment
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
