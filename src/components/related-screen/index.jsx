import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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
  const [simplifiedView, setSimplifiedView] = React.useState(false);
  const classes = useStyles();

  /**
   * Original data provided by API is an object because is more optimal to add hits refering channel by key.
   * But Pie chart needs an array.
   * @param {object} relatedChannels
   * @return {array}
   */
  function transformData(relatedChannels) {
    const res = [];
    Object.keys(relatedChannels).forEach((channelName) => {
      if (!simplifiedView  || (simplifiedView && relatedChannels[channelName].hits !== 1)) {
        res.push({
          id: channelName,
          label: channelName,
          value: relatedChannels[channelName].hits,
          link: `https://youtube.com${relatedChannels[channelName].url}`,
        });
      }

    });
    return res;
  }

  const handleSwitchChange = (event) => {
    setSimplifiedView(event.target.checked);
  };

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
                  data={transformData(state.relatedHistory[searchId || state.lastRelatedSearchId].relatedChannels)}
                  id={searchId || state.lastRelatedSearchId}
                />
                <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={simplifiedView} onChange={handleSwitchChange} name="ratioView" />}
                    label="Enable simplified view"
                  />
                </FormGroup>
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
