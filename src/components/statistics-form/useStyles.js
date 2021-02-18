import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },
  button: {
    height: '3em',
    marginBottom: '2em',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '2em',
    },
  },
}));
