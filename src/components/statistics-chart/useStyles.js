import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    height: '60vh',
  },
  modeSelector: {
    marginTop: '1em',
    marginBottom: '1em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '1em',

    },
  },
  tooltip: {
    fontFamily: 'Roboto',
    border: '1px solid grey',
    borderRadius: '4px',
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: '5px',
    '& > span': {
      fontSize: '1.1em',
      fontWeight: 'bold'
    },
    '& > .viewsCount': {
      textAlign: 'right',
    }
  }
}));
