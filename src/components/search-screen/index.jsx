import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import AlertBar from '../alert-bar';
import SearchForm from '../search-form';
import Store from '../../reducers/store';

function SearchScreen() {
  const [state, dispatch] = useContext(Store);
  const history = useHistory();
  useEffect(() => {
    if (state.lastSearchId) {
      history.push(`/results/${state.lastSearchId}`);
    }
  }, [state.lastSearchId]);
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <SearchForm />
      <AlertBar msg={state.msg} error={state.error} />
    </Grid>
  );
}

export default SearchScreen;
