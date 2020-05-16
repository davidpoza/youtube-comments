import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  videoInfo: {
    padding: '1em 0',
    borderBottom: '1px solid #dcdcdc',
    '& > .title': {
      fontSize: '1.5em',
    },
    '& > .date': {
      fontSize: '1em',
      fontWeight: 200,
    },
  },
  channelInfo: {
    display: 'flex',
    height: 80,
    alignItems: 'center',
    '& > .avatar': {
      width: theme.spacing(7),
      height: theme.spacing(7),
      float: 'left',
      margin: '0.5em 0.5em 0.5em 0',
    },
    '& .channelName': {
      fontWeight: 400,
      fontSize: '1em',
      margin: '0.4em 0 0.2em 0',
    },
    '& .subsCount': {
      fontSize: '1em',
      lineHeight: '1',
      fontWeight: 200,
    },
  },
}));
