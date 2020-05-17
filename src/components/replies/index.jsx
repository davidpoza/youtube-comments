import React from 'react';
import Comment from '../comment';

export default function Replies(props) {
  const { replies } = props;
  if (replies) {
    return (
      replies.map((r) => (
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
