export default function createComment({
  authorImage,
  authorName,
  authorUrl,
  fav,
  publishedDate,
  replies = [], // replies on this comment, using same entity
  text,
}) {
  return ({
    authorImage,
    authorName,
    authorUrl,
    fav,
    publishedDate,
    replies,
    text,
  });
}
