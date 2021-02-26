import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

// own
import AlertBar from '../alert-bar';
import RelatedForm from '../related-form';
import RelatedChart from '../related-chart';
import Store from '../../reducers/store';
import ChannelInfo from '../channel-info';
import useStyles from './useStyles';

function RelatedScreen(props) {
  const { setFormOpen } = props;
  const { searchId } = useParams();
  const [state, dispatch] = useContext(Store);
  const classes = useStyles();
console.log(state.relatedHistory)
  return (
    <Grid
      container
      spacing={0}
      alignItems="flex-start"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} md={10} xl={10}>
        <RelatedForm setFormOpen={setFormOpen} />
        {
          state.relatedHistory && (searchId || state.lastRelatedSearchId)
            && (
              <>
                <ChannelInfo
                  userImage={state.relatedHistory[searchId || state.lastRelatedSearchId].thumbnailUrl}
                  userName={state.relatedHistory[searchId || state.lastRelatedSearchId].title}
                  userLink={state.relatedHistory[searchId || state.lastRelatedSearchId].url}
                  userSubsCount={state.relatedHistory[searchId || state.lastRelatedSearchId].subscriberCount}
                />
                <RelatedChart
                  data={state.relatedHistory[searchId || state.lastRelatedSearchId].relatedChannels}
                  id={searchId || state.lastRelatedSearchId}
                />
              </>
            )
        }
        <AlertBar msg={state.msg} error={state.error} />
      </Grid>

    </Grid>
  );
}

export default RelatedScreen;

RelatedScreen.propTypes = {
  setFormOpen: PropTypes.func,
};
