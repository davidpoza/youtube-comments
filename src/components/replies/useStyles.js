import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  dropDown: {
    height: '5em',
    overflow: 'hidden',
    '& a:link, & a:visited': {
      color: '#2e79da',
      textDecoration: 'none',
    },
  },
  dropDownOpen: {
    height: 'auto',
  },
  showMore: {
    marginLeft: '4.5em',
    textTransform: 'none',
    color: '#0f65d4',
  },
}));
