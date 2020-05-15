import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import get from 'lodash.get';
import Store from '../../reducers/store';
import VideoPlayer from '../video-player';

function ResultsScreen() {
  const { searchId } = useParams();
  const [state, dispatch] = useContext(Store);
  const search = state.history[searchId];
  console.log(search)

  if (search) {
    return (
      <Container maxWidth="md">
        <VideoPlayer
          videoId={search.videoId}
          title={search.videoTitle}
          description={search.videoDescription}
        />
      </Container>
    );
  }
  return (null);
}

export default ResultsScreen;
