import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

// own
import useStyles from './useStyles';
import Store from '../../reducers/store';
import { logout } from '../../actions/user-actions';

export default function MyAvatar(props) {
  const [state, dispatch] = useContext(Store);
  const classes = useStyles();
  const { userId } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout(dispatch);
  };

  if (userId) {
    return (
      <>
        <Avatar
          onClick={handleClick}
          className={classes.avatar}
          src={`${process.env.REACT_APP_API_URL}/api/users/avatar/${userId}`}
        />
        <Menu
          className={classes.menu}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem disabled className={classes.menuEmail}>{state.user.email}</MenuItem>
          <MenuItem component={Link} href="/" style={{ textDecoration: 'none' }}>Comments Search</MenuItem>
          <MenuItem component={Link} href="/statistics" style={{ textDecoration: 'none' }}>Get channel statistics</MenuItem>
          <MenuItem onClick={handleLogout} style={{ textDecoration: 'none' }}>Logout</MenuItem>
        </Menu>
      </>
    );
  }
  return (null);
}

MyAvatar.propTypes = {
  userId: PropTypes.string,
};
