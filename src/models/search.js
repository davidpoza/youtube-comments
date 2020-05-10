export default function createSearch({
  comments = [],
  date, // date of search
  id,
  keywords,
  username,
  videoId,
  videoTitle,
}) {
  return ({
    comments,
    date,
    id,
    keywords,
    username,
    videoId,
    videoTitle,
  });
}
