export default function createSearch({
  comments = [],
  date, // date of search
  id,
  keywords,
  totalResults = 0,
  userName, // channel name
  userLink, // chanel link
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
    userLink,
    videoId,
    videoTitle,
  });
}
