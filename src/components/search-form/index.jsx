import React, { useState, useContext, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
import { videoUrlIsValid } from '../helpers/utils';
import Store from '../../reducers/store';
import useStyles from './useStyles';
import { fetchComments } from '../../actions/comments-actions';

function SearchFrom() {
  const [state, dispatch] = useContext(Store);
  const [videoUrl, setVideoUrl] = useState('');
  const [keywords, setKeywords] = useState('');
  let videoId = videoUrlIsValid(videoUrl);

  const makeRequest = useCallback(() => {
    fetchComments(dispatch, { videoId });
  }, [state, dispatch]);
  const classes = useStyles();

  return (
    <Grid item xs={10} md={6} xl={3}>
      <form className={classes.root} noValidate autoComplete="off">
        { state.loading && <CircularProgress /> }
        <div>
          <TextField
            error={videoUrl !== '' && !videoId && true}
            fullWidth
            helperText={
              videoUrl === ''
                ? 'You must enter an url'
                : !videoId
                  && 'Url is not valid: It must be like https://www.youtube.com/watch?v=RKfmyrBMLfw'
            }
            label="Video url"
            onChange={(e) => {
              videoId = videoUrlIsValid(e.target.value);
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
