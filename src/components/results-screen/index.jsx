import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Store from '../../reducers/store';
import VideoPlayer from '../video-player';

function ResultsScreen() {
  const { searchId } = useParams();
  const [state, dispatch] = useContext(Store);
  const search = state.history[searchId];

  return (
    <Container maxWidth="md">
      <VideoPlayer />
    </Container>
  );
}

export default ResultsScreen;
