import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { useLocation } from 'react-router-dom';
import useStyles from './useStyles';

export default function MyAppBar(props) {
  const { drawerIsOpen, setDrawerOpen, setLoginFormOpen } = props;
  const location = useLocation();
  const toggleDrawer = useCallback(() => {
    setDrawerOpen(!drawerIsOpen);
  }, [drawerIsOpen]);
  const openLoginForm = useCallback(() => {
    setLoginFormOpen(true);
  });

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
        <IconButton
          onClick={openLoginForm}
          title="Login"
          aria-label="login"
          className={classes.search}
        >
          <PersonIcon />
        </IconButton>
        {
          location.pathname !== '/' && (
            <IconButton
              title="Go homepage"
              aria-label="home"
              className={classes.search}
              href="/"
            >
              <SearchIcon />
            </IconButton>
          )
        }
      </Toolbar>
    </AppBar>
  );
}

MyAppBar.propTypes = {
  setDrawerOpen: PropTypes.func,
  drawerIsOpen: PropTypes.bool,
  setLoginFormOpen: PropTypes.func,
};
