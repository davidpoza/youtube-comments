export default function createSearch({
  comments = [],
  date, // date of search
  id,
  keywords,
  totalResults = 0,
  username,
  videoId,
  videoTitle,
}) {
  return ({
    comments,
    date,
    id,
    keywords,
    totalResults,
    username,
    videoId,
    videoTitle,
  });
}
