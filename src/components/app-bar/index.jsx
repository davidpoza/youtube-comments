import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './useStyles';

export default function MyAppBar(props) {
  const { drawerIsOpen, setDrawerOpen } = props;
  const toggleDrawer = useCallback(() => {
    setDrawerOpen(!drawerIsOpen);
  }, [drawerIsOpen]);


  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          aria-label="menu"
          className={classes.menuButton}
          color="inherit"
          edge="start"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Youtube Comments
        </Typography>
        <IconButton aria-label="search" className={classes.search} href="/">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

MyAppBar.propTypes = {
  setDrawerOpen: PropTypes.func,
  drawerIsOpen: PropTypes.bool,
};
