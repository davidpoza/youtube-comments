import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
import { videoUrlIsValid } from '../helpers/utils';
import Store from '../../reducers/store';
import useStyles from './useStyles';
import { fetchComments } from '../../actions/comments-actions';

function SearchFrom(props) {
  const { setFormOpen } = props;
  const [state, dispatch] = useContext(Store);
  const [videoUrl, setVideoUrl] = useState('');
  const [keywords, setKeywords] = useState('');
  let videoId = videoUrlIsValid(videoUrl);

  const makeRequest = useCallback(() => {
    if (videoId && keywords !== '') {
      fetchComments(dispatch, { videoId, keywords, token: get(state, 'user.token') });
    }
  }, [state, dispatch, videoId, keywords]);

  const openLogin = useCallback(() => {
    setFormOpen(true);
  });

  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        { state.loading && <CircularProgress /> }
        <div>
          <TextField
            autoFocus
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
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                makeRequest();
              }
            }}
            value={keywords}
            variant="outlined"
          />
        </div>
        <div>
          <Button
            color="primary"
            endIcon={<Icon>search</Icon>}
            onClick={state.user ? makeRequest : openLogin}
            size="large"
            variant="contained"
            disabled={!(videoId && keywords !== '')}
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SearchFrom;

SearchFrom.propTypes = {
  setFormOpen: PropTypes.func,
};
