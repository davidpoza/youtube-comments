import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Store from '../../reducers/store';
import VideoPlayer from '../video-player';
import VideoInfo from '../video-info';
import DescriptionBox from '../description-box';
import { formatSubsCount, sortCommentsByDate } from '../helpers/utils';
import useStyles from './useStyles';
import Comment from '../comment';
import Replies from '../replies';
import Pagination from '../pagination';
import Config from '../../config';

function ResultsScreen() {
  const classes = useStyles();
  const { searchId, pag } = useParams();
  const pagInt = pag ? parseInt(pag, 10) : 1;
  const [state, dispatch] = useContext(Store);
  const search = state.history[searchId];
  console.log(search)

  if (search) {
    return (
      <Grid
        container
        spacing={0}
        alignItems="flex-start"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} lg={6}>
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
            <div>
              <Typography className={classes.commentCounter} variant="subtitle1">
                {
                  `${search.comments.length} Comments`
                }
              </Typography>
            </div>
            <div className={classes.commentsBlock}>
              {
                search.comments
                  .sort(sortCommentsByDate)
                  .slice((pagInt - 1) * Config.commentsPerPage, pagInt * Config.commentsPerPage)
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
            <Pagination commentCount={search.comments.length} className={classes.pagination} />
          </Container>
        </Grid>
      </Grid>
    );
  }
  return (null);
}

export default ResultsScreen;
