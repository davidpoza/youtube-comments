import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

function SearchFrom() {
  const classes = useStyles();
  return (
    <Grid item xs={10} md={6}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField label="Video url" variant="outlined" fullWidth />
        </div>
        <div>
          <TextField
            label="Keywords to find"
            variant="outlined"
            fullWidth
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<Icon>send</Icon>}
          >
            Search
          </Button>
        </div>
      </form>
    </Grid>
  );
}

export default SearchFrom;
