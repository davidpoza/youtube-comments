import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

// own
import AlertBar from '../alert-bar';
import StatisticsForm from '../statistics-form';
import StatisticsChart from '../statistics-chart';
import Store from '../../reducers/store';
import ChannelInfo from '../channel-info';
import useStyles from './useStyles';


function StatisticsScreen(props) {
  const { setFormOpen } = props;
  const { searchId } = useParams();
  const [state, dispatch] = useContext(Store);
  const classes = useStyles();

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
          state.statisticsHistory && (searchId || state.lastChannelSearchId)
            && (
              <>
                <ChannelInfo
                  userImage={state.statisticsHistory[searchId || state.lastChannelSearchId].thumbnailUrl}
                  userName={state.statisticsHistory[searchId || state.lastChannelSearchId].title}
                  userLink={state.statisticsHistory[searchId || state.lastChannelSearchId].url}
                  userSubsCount={state.statisticsHistory[searchId || state.lastChannelSearchId].subscriberCount}
                />
                <StatisticsChart
                  data={state.statisticsHistory[searchId || state.lastChannelSearchId].videos}
                  id={searchId || state.lastChannelSearchId}
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
