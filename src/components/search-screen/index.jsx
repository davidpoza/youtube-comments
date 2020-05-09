import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchForm from '../search-form';

function SearchScreen() {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <SearchForm />
    </Grid>
  );
}

export default SearchScreen;
