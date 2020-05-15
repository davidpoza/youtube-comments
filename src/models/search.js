export default function createSearch({
  comments = [],
  date, // date of search
  id,
  keywords,
  totalResults = 0,
  userName, // channel name
  userLink, // chanel link
  imageLink,
  imageWidth,
  imageHeight,
  videoId,
  videoTitle,
  videoDescription,
}) {
  return ({
    comments,
    date,
    id,
    keywords,
    totalResults,
    userName,
    userLink,
    imageLink,
    imageWidth,
    imageHeight,
    videoId,
    videoTitle,
    videoDescription,
  });
}
