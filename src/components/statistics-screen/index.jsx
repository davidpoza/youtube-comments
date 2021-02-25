import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

// own
import AlertBar from '../alert-bar';
import StatisticsForm from '../statistics-form';
import StatisticsChart from '../statistics-chart';
import Store from '../../reducers/store';
import ChannelInfo from '../channel-info';
import useStyles from './useStyles';


function StatisticsScreen(props) {
  const { setFormOpen } = props;
  const [state, dispatch] = useContext(Store);
  const classes = useStyles();
  const history = useHistory();
  // useEffect(() => {
  //   if (state.lastSearchId) {
  //     history.push(`/results/${state.lastSearchId}`);
  //     dispatch({ type: 'CLEAN_LAST_SEARCH_ID' });
  //   }
  // }, [state.lastSearchId, dispatch, history]);

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
        {
          state.statisticsHistory && state.statisticsHistory.length > 0 && state.lastChannelSearchId
            && (
              <>
                <ChannelInfo
                  userImage={state.statisticsHistory[state.lastChannelSearchId].thumbnailUrl}
                  userName={state.statisticsHistory[state.lastChannelSearchId].title}
                  userLink={state.statisticsHistory[state.lastChannelSearchId].url}
                  userSubsCount={state.statisticsHistory[state.lastChannelSearchId].subscriberCount}
                />
                <StatisticsChart
                  data={state.statisticsHistory[state.lastChannelSearchId].videos}
                  id={state.lastChannelSearchId}
                />
              </>
            )
        }
        <AlertBar msg={state.msg} error={state.error} />
      </Grid>

    </Grid>
  );
}

export default StatisticsScreen;

StatisticsScreen.propTypes = {
  setFormOpen: PropTypes.func,
};
