import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import get from 'lodash.get';
import Store from '../../reducers/store';
import VideoPlayer from '../video-player';
import VideoInfo from '../video-info';

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
            title={search.videoTitle}
            description={search.videoDescription}
            date={search.videoDate}
          />
          comentarios
        </Container>
      </div>
    );
  }
  return (null);
}

export default ResultsScreen;
