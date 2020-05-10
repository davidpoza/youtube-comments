import React, { useState, useContext, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { videoUrlIsValid } from '../helpers/utils';
import config from '../../config';
import fetchMock from '../mocks/api';
import Store from '../../reducers/store';
import useStyles from './useStyles';

function SearchFrom() {
  const [state, dispatch] = useContext(Store);
  const [videoUrl, setVideoUrl] = useState('');
  const [keywords, setKeywords] = useState('');
  const makeRequest = useCallback(() => {
    const q = [
      config.apiBaseUrl,
      'part=replies,snippet',
      `&videoId=xxxx`,
      `&textFormat=xxxx`,
      `&maxResults=100`,
      `&searchTerms=xxxx`, // TODO: encode
    ].join('');
    console.log('request lanzada: ', q);
    console.log('estado: ', state);
    dispatch({ type: 'ADD_URL', payload: { id: 'xxxx', date: '10/05/2020 12:29', content: 'hola' } });
    return (fetchMock);
  }, [state, dispatch]);
  const classes = useStyles();

  return (
    <Grid item xs={10} md={6} xl={3}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            error={videoUrl !== '' && !videoUrlIsValid(videoUrl) && true}
            fullWidth
            helperText={
              videoUrl === ''
                ? 'You must enter an url'
                : !videoUrlIsValid(videoUrl)
                  && 'Url is not valid: It must be like https://www.youtube.com/watch?v=RKfmyrBMLfw'
            }
            label="Video url"
            onChange={(e) => {
              setVideoUrl(e.target.value);
            }}
            value={videoUrl}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            fullWidth
            label="Keywords to find"
            onChange={(e) => {
              setKeywords(e.target.value);
            }}
            value={keywords}
            variant="outlined"
          />
        </div>
        <div>
          <Button
            color="primary"
            endIcon={<Icon>send</Icon>}
            onClick={makeRequest}
            size="large"
            variant="contained"
          >
            Search
          </Button>
        </div>
      </form>
    </Grid>
  );
}

export default SearchFrom;
