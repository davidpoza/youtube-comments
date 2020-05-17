import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'start',
    marginLeft: '0.5em',
    marginBottom: '0.5em',
    marginTop: '0.5em',
    '& > .avatar': {
      width: theme.spacing(5),
      height: theme.spacing(5),
      float: 'left',
      margin: '0.5em 0.5em 0.5em 0',
    },
    '& .channelName': {
      color: 'black',
      fontWeight: 500,
      fontSize: '0.8em',
      margin: '0.2em 0.2em 0 0',
      textDecoration: 'none',
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
      marginTop: '0.6em',
    },
  },
  reply: {
    marginLeft: '4em',
    '& > .avatar': {
      width: theme.spacing(3),
      height: theme.spacing(3),
      float: 'left',
      margin: '0.5em 0.5em 0.5em 0',
    },
    '& .content': {
      marginLeft: '0.4em',
      marginTop: '0.5em',
    },
  },
  dropDown: {
    overflow: 'hidden',
    '& a:link, & a:visited': {
      color: '#606060',
      textDecoration: 'none',
    },
    '& a:hover': {
      color: '#606060',
      textDecoration: 'underline',
    },
  },
  dropDownClose: {
    height: '5.5em',
  },
  dropDownOpen: {
    height: 'auto',
  },
}));
