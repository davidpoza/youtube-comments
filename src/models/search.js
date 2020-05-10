export default function createSearch({
  comments = [],
  date, // date of search
  id,
  keywords,
  totalResults = 0,
  userName,
  videoId,
  videoTitle,
}) {
  return ({
    comments,
    date,
    id,
    keywords,
    totalResults,
    userName,
    videoId,
    videoTitle,
  });
}
