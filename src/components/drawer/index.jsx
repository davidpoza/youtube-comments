import React, { useContext, useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash.get';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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

function SimpleMenu({ selectedOption, setType }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.menuButton}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {selectedOption}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => { setAnchorEl(null); }}
      >
        <MenuItem onClick={() => { setType('statistics'); setAnchorEl(null); }}>Statistic history</MenuItem>
        <MenuItem onClick={() => { setType('comments'); setAnchorEl(null); }}>Comments search history</MenuItem>
      </Menu>
    </div>
  );
}

export default function Drawer(props) {
  const { drawerIsOpen, setDrawerOpen } = props;
  const classes = useStyles();
  const [state, dispatch] = useContext(Store);
  const [type, setType] = useState('comments');

  useEffect(() => {
    if (window.location.href.includes('/statistics')) {
      setType('statistics');
    }
  }, []);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen(!drawerIsOpen);
  }, [setDrawerOpen, drawerIsOpen]);
  const items = type === 'comments' ? state.history : state.statisticsHistory;
  const list = () => (
    <List className={classes.list}>
      {
        items && Object.keys(items)
          .map((id) => (type === 'comments' ? state.history[id] : state.statisticsHistory[id]))
          .sort(sortByDate)
          .map((obj) => (
            <DrawerItem
              type={type}
              counter={get(obj, type === 'comments' ? 'comments' : 'videos', []).length}
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
        <SimpleMenu selectedOption={type} setType={setType} />
        {list()}
      </SwipeableDrawer>
    </div>
  );
}

Drawer.propTypes = {
  setDrawerOpen: PropTypes.func,
  drawerIsOpen: PropTypes.bool,
};
