import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

export default function DrawerItem(props) {
  const {
    date,
    imageHeight,
    imageUrl,
    imageWidth,
    keywords,
    title,
    userLink,
    userName,
    videoId,
    videoLink,
  } = props;
  const classes = useStyles();
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <a href={videoLink}>
            <Avatar variant="square" src={imageUrl} />
          </a>
        </ListItemAvatar>
        <ListItemText
          primary={(
            <Typography
              variant="h1"
              className={classes.title}
              color="textPrimary"
              component="a"
              href={`/results/${videoId}`}
            >
              {title}
            </Typography>
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
                {keywords}
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
  date: PropTypes.string,
  imageHeight: PropTypes.number,
  imageUrl: PropTypes.string,
  imageWidth: PropTypes.number,
  keywords: PropTypes.string,
  title: PropTypes.string,
  userLink: PropTypes.string,
  userName: PropTypes.string,
  videoId: PropTypes.string,
  videoLink: PropTypes.string,
};
