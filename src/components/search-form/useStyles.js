import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));