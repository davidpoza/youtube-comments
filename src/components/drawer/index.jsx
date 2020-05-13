import React, { useContext, useCallback } from 'react';
import get from 'lodash.get';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Store from '../../reducers/store';
import useStyles from './useStyles';
import DrawerItem from '../drawer-item';

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
        Object.keys(state.history).map((id) => {
          const imageUrl = get(state.history[id], 'imageLink');
          const keywords = get(state.history[id], 'keywords');
          const title = get(state.history[id], 'videoTitle');
          const userLink = get(state.history[id], 'userLink');
          const userName = get(state.history[id], 'userName');
          const videoId = get(state.history[id], 'videoId');
          return (
            <DrawerItem
              imageUrl={imageUrl}
              key={id}
              videoId={id}
              keywords={keywords}
              title={title}
              userLink={userLink}
              userName={userName}
              videoLink={`https://www.youtube.com/watch?v=${videoId}`}
            />
          );
        })
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
