import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Icon from '@material-ui/core/Icon';
import useStyles from './useStyles';
import Store from '../../reducers/store';
import { removeSearch as removeCommentsSearch } from '../../actions/comments-actions';
import { removeSearch as removeStatisticsSearch, removeRelatedSearch } from '../../actions/channel-actions';

export default function DrawerItem(props) {
  const {
    id,
    date,
    imageUrl,
    keywords,
    title,
    userLink,
    userName,
    avatarLink,
    counter,
    type = 'comments',
  } = props;
  const classes = useStyles();
  const [state, dispatch] = useContext(Store);

  const remove = useCallback(() => {
    if (type === 'comments') {
      removeCommentsSearch(dispatch, { searchId: id });
    } else if (type === 'videos') {
      removeStatisticsSearch(dispatch, { searchId: id });
    } else if (type === 'channels') {
      removeRelatedSearch(dispatch, { searchId: id });
    }
  }, [dispatch, id]);

  function getLink(itemType, itemId) {
    if (itemType === 'comments') {
      return (`/results/${itemId}`);
    }
    if (itemType === 'videos') {
      return (`/statistics/${itemId}`);
    }
    if (itemType === 'channels') {
      return (`/related-channels/${itemId}`);
    }
  }

  function getCounterItemType(itemType) {
    if (itemType === 'comments') {
      return ('comments');
    }
    if (itemType === 'videos') {
      return ('videos');
    }
    if (itemType === 'channels') {
      return ('channels');
    }
  }

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <a href={avatarLink}>
            <Avatar variant={type === 'comments' ? 'square' : 'circular'} src={imageUrl} />
          </a>
        </ListItemAvatar>
        <ListItemText
          classes={{ primary: classes.root }}
          primary={(
            <>
              <ListItemSecondaryAction>
                <Icon fontSize="small" className={classes.remove} onClick={remove}>
                  remove_circle
                </Icon>
              </ListItemSecondaryAction>
              <Typography
                variant="h1"
                className={classes.title}
                color="textPrimary"
                component="a"
                href={getLink(type, id)}
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.date}
                color="textPrimary"
              >
                {date}
              </Typography>
            </>
          )}
          secondary={(
            <>
              <Typography
                variant="h1"
                className={classes.author}
                color="textPrimary"
                component="a"
                href={userLink}
              >
                {userName}
              </Typography>
              <Typography
                variant="body1"
                className={classes.content}
                color="textPrimary"
                component="span"
              >
                { type === 'comments' && `keywords: ${keywords} | ` }
                {`${counter} ${getCounterItemType(type)}`}
              </Typography>
            </>
          )}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

DrawerItem.propTypes = {
  counter: PropTypes.number,
  date: PropTypes.string,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  keywords: PropTypes.string,
  title: PropTypes.string,
  userLink: PropTypes.string,
  userName: PropTypes.string,
  avatarLink: PropTypes.string,
  type: PropTypes.string,
};
