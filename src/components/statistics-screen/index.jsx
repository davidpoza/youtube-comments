import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import AlertBar from '../alert-bar';
import StatisticsForm from '../statistics-form';
import StatisticsChart from '../statistics-chart';
import Store from '../../reducers/store';
import useStyles from './useStyles';


function StatisticsScreen(props) {
  const { setFormOpen } = props;
  const [state, dispatch] = useContext(Store);
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    if (state.lastSearchId) {
      history.push(`/results/${state.lastSearchId}`);
      dispatch({ type: 'CLEAN_LAST_SEARCH_ID' });
    }
  }, [state.lastSearchId, dispatch, history]);

  return (
    <Grid
      container
      spacing={0}
      alignItems="flex-start"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} md={10} xl={10}>
        <StatisticsForm setFormOpen={setFormOpen} />
        <StatisticsChart data={state.statisticsHistory} id={state.lastChannelSearchId} />
        <AlertBar msg={state.msg} error={state.error} />
      </Grid>
    </Grid>
  );
}

export default StatisticsScreen;

StatisticsScreen.propTypes = {
  setFormOpen: PropTypes.func,
};
