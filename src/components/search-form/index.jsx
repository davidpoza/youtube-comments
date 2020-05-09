import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { videoUrlIsValid } from '../helpers/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

function SearchFrom() {
  const [videoUrl, setVideoUrl] = useState('');
  const classes = useStyles();
  return (
    <Grid item xs={10} md={6}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            error={!videoUrlIsValid(videoUrl) && true}
            fullWidth
            helperText={!videoUrlIsValid(videoUrl) && 'Url is not valid'}
            label="Video url"
            onChange={(e) => {
              setVideoUrl(e.target.value);
            }}
            value={videoUrl}
            variant="outlined"
          />
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
