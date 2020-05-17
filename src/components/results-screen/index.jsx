import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Store from '../../reducers/store';
import VideoPlayer from '../video-player';
import VideoInfo from '../video-info';
import DescriptionBox from '../description-box';
import { formatSubsCount, sortCommentsByDate } from '../helpers/utils';
import useStyles from './useStyles';
import Comment from '../comment';
import Replies from '../replies';

function ResultsScreen() {
  const classes = useStyles();
  const { searchId } = useParams();
  const [state, dispatch] = useContext(Store);
  const search = state.history[searchId];
  console.log(search)

  if (search) {
    return (
      <div>
        <VideoPlayer
          videoId={search.videoId}
        />
        <Container maxWidth="lg">
          <VideoInfo
            date={search.videoDate}
            title={search.videoTitle}
            userImage={search.userImage}
            userLink={search.userLink}
            userName={search.userName}
            userSubsCount={formatSubsCount(search.userSubs)}
          />
          <DescriptionBox text={search.videoDescription} />
          <div className={classes.commentsBlock}>
            {
              search.comments
                .sort(sortCommentsByDate)
                .map((c) => (
                  <div key={c.id}>
                    <Comment
                      key={c.id}
                      text={c.text}
                      authorImage={c.authorImage}
                      authorName={c.authorName}
                      authorUrl={c.authorUrl}
                      publishedDate={c.publishedDate}
                    />
                    <Replies replies={c.replies} />
                  </div>
                ))
            }
          </div>
        </Container>
      </div>
    );
  }
  return (null);
}

export default ResultsScreen;
