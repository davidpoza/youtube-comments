import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import get from 'lodash.get';
import Store from '../../reducers/store';
import VideoPlayer from '../video-player';
import VideoInfo from '../video-info';
import { formatSubsCount } from '../helpers/utils';

function ResultsScreen() {
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
            description={search.videoDescription}
            title={search.videoTitle}
            userImage={search.userImage}
            userName={search.userName}
            userSubsCount={formatSubsCount(search.userSubs)}
          />
          <div>
            comentarios
          </div>
        </Container>
      </div>
    );
  }
  return (null);
}

export default ResultsScreen;
