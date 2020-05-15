import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  videoPreview: {
    position: 'relative',
    paddingBottom: '56.25%', /* 16:9 */
    paddingTop: '25px',
    height: 0,
    '& > iframe': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  },
  title: {
    fontSize: '1.5em',
    margin: '0.4em 0 0.4em 0',
  },
}));
