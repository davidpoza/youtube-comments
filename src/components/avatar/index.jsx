import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

export default function MyAvatar(props) {
  const { userId } = props;
  if (userId) {
    return (
      <Avatar className="avatar" src={`${process.env.REACT_APP_API_URL}/users/avatar/${userId}`} />
    );
  }
  return (null);
}

MyAvatar.propTypes = {
  userId: PropTypes.string,
};
