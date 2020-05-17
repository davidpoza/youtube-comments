import React, { useContext, useCallback } from 'react';
import moment from 'moment';
import get from 'lodash.get';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
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

export default function Drawer() {
  const classes = useStyles();
  const [state, dispatch] = useContext(Store);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const list = () => (
    <List className={classes.list}>
      {
        Object.keys(state.history)
          .map((id) => (state.history[id]))
          .sort(sortByDate)
          .map((obj) => (
            <DrawerItem
              id={get(obj, 'id')}
              date={get(obj, 'date')}
              imageUrl={get(obj, 'imageLink')}
              key={get(obj, 'id')}
              keywords={get(obj, 'keywords')}
              title={get(obj, 'videoTitle')}
              userLink={get(obj, 'userLink')}
              userName={get(obj, 'userName')}
              videoId={get(obj, 'videoId')}
              videoLink={`https://www.youtube.com/watch?v=${get(obj, 'videoId')}`}
            />
          ))
      }
    </List>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Typography className={classes.title} variant="h6" component="h2">
          Search history
        </Typography>
        {list()}
      </SwipeableDrawer>
      <IconButton color="primary" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
