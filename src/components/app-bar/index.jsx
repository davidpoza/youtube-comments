import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon onClick={toggleDrawer} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Youtube Comments
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

MyAppBar.propTypes = {
  setDrawerOpen: PropTypes.func,
  drawerIsOpen: PropTypes.bool,
};
