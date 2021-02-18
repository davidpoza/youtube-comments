import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Search from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import Store from '../../reducers/store';
import useStyles from './useStyles';
import { fetchComments } from '../../actions/comments-actions';
import withIsMobile from '../../hocs/with-is-mobile';

function StatisticsFrom(props) {
  const { setFormOpen, isMobile } = props;
  const [state, dispatch] = useContext(Store);
  const [channelId, setChannelId] = useState('');

  const makeRequest = useCallback(() => {
    if (channelId) {
      fetchComments(dispatch, { channelId, token: get(state, 'user.token') });
      setChannelId('');
    }
  }, [state, dispatch, channelId]);

  const openLogin = useCallback(() => {
    setFormOpen(true);
  }, [setFormOpen]);

  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        { state.loading && <CircularProgress /> }
        <TextField
          autoFocus
          error={channelId === ''}
          fullWidth
          helperText="You must enter a channel id"
          label="Channel id"
          className={classes.input}
          onChange={(e) => {
            setChannelId(e.target.value);
          }}
          value={channelId}
          variant="outlined"
        />
        <Button
          color="primary"
          onClick={state.user ? makeRequest : openLogin}
          size="large"
          variant="contained"
          disabled={!channelId}
          className={classes.button}
        >
          {
            isMobile
              ? <Search />
              : 'Search'
          }
        </Button>
      </form>
    </div>
  );
}

export default withIsMobile(StatisticsFrom);

StatisticsFrom.propTypes = {
  setFormOpen: PropTypes.func,
  isMobile: PropTypes.bool,
};
