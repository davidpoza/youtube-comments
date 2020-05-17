import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 80,
    alignItems: 'center',
    marginLeft: '0.5em',
    '& > .avatar': {
      width: theme.spacing(5),
      height: theme.spacing(5),
      float: 'left',
      margin: '0.5em 0.5em 0.5em 0',
    },
    '& .channelName': {
      fontWeight: 'bold',
      fontSize: '0.9em',
      margin: '0.2em 0.2em 0 0',
    },
    '& .date': {
      fontWeight: '200',
      fontSize: '0.8em',
      margin: '0.2em 0 0 0.2em',
    },
    '& .body': {
      fontSize: '0.9em',
      margin: '0.2em 0',
    },
    '& .content': {
      marginLeft: '0.4em',
    },
  },
}));
