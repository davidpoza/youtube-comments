import React, {
  useContext, useCallback, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash.get';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Store from '../../reducers/store';
import useStyles from './useStyles';
import DrawerItem from '../drawer-item';

function sortByDate(a, b) {
  const date1 = moment(a.date, 'DD-MM-YYYY HH:mm');
  const date2 = moment(b.date, 'DD-MM-YYYY HH:mm');
  if (date1.isBefore(date2)) {
    return (1);
  }
  if (date2.isBefore(date1)) {
    return (-1);
  }
  return (0);
}

export default function Drawer(props) {
  const { drawerIsOpen, setDrawerOpen } = props;
  const classes = useStyles();
  const [state, dispatch] = useContext(Store);
  const [type, setType] = useState('comments');

  useEffect(() => {
    if (window.location.href.includes('/statistics')) {
      setType('videos');
    } else if (window.location.href.includes('/related-channels')) {
      setType('channels');
    }
  }, []);

  function getItems(itemType) {
    if (itemType === 'comments') {
      return state.history;
    }
    if (itemType === 'videos') {
      return state.statisticsHistory;
    }
    if (itemType === 'channels') {
      return state.relatedHistory;
    }
    return ([]);
  }

  function getItemsLength(itemType, obj) {
    if (itemType === 'comments') {
      return obj.comments.length;
    }
    if (itemType === 'videos') {
      return obj.videos.length;
    }
    if (itemType === 'channels') {
      return Object.keys(obj.relatedChannels).length;
    }
    return ([]);
  }

  const toggleDrawer = useCallback(() => {
    setDrawerOpen(!drawerIsOpen);
  }, [setDrawerOpen, drawerIsOpen]);
  const items = getItems(type);
  const list = () => (
    <List className={classes.list}>
      {
        items && Object.keys(items)
          .map((id) => (getItems(type)[id]))
          .sort(sortByDate)
          .map((obj) => (
            <DrawerItem
              type={type}
              counter={getItemsLength(type, obj)}
              date={get(obj, 'date')}
              id={get(obj, 'id')}
              imageUrl={type === 'comments' ? get(obj, 'imageLink') : get(obj, 'thumbnailUrl')}
              key={get(obj, 'id')}
              keywords={get(obj, 'keywords')}
              title={type === 'comments' ? get(obj, 'videoTitle') : get(obj, 'title')}
              userLink={type === 'comments' ? get(obj, 'userLink') : get(obj, 'url')}
              userName={get(obj, 'userName')}
              videoId={get(obj, 'videoId')}
              avatarLink={type === 'comments' ? `https://www.youtube.com/watch?v=${get(obj, 'videoId')}` : get(obj, 'url')}
            />
          ))
      }
    </List>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={drawerIsOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Typography className={classes.title} variant="h6" component="h2">
          History
        </Typography>
        {list()}
      </SwipeableDrawer>
    </div>
  );
}

Drawer.propTypes = {
  setDrawerOpen: PropTypes.func,
  drawerIsOpen: PropTypes.bool,
};
