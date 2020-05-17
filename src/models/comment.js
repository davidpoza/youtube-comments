export default function createComment({
  id,
  authorImage,
  authorName,
  authorUrl,
  fav,
  publishedDate,
  replies = [], // replies on this comment, using same entity
  text,
}) {
  return ({
    id,
    authorImage,
    authorName,
    authorUrl,
    fav,
    publishedDate,
    replies,
    text,
  });
}
