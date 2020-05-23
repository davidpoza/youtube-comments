import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './useStyles';

export default function LoginForm(props) {
  const classes = useStyles();
  const { formIsOpen, setFormOpen, setRegisterFormOpen } = props;
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => {
    setFormOpen(false);
  };

  const handleOpenRegisterForm = () => {
    setFormOpen(false);
    setRegisterFormOpen(true);
  };

  return (
    <div>
      <Dialog open={formIsOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To access search functionallity you have to be logged in.
          </DialogContentText>
          <DialogContentText>
            Do you have no account?, create one
            <Button
              onClick={handleOpenRegisterForm}
              className={classes.createAccount}
            >
              here
            </Button>
          </DialogContentText>
          <TextField
            onChange={
              (e) => {
                setEmail(e.target.value);
              }
            }
            value={email}
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            onChange={
              (e) => {
                setPassword(e.target.value);
              }
            }
            value={password}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            disabled={password === '' || email === ''}
            onClick={handleClose}
            color="primary"
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

LoginForm.propTypes = {
  formIsOpen: PropTypes.bool,
  setFormOpen: PropTypes.func,
  setRegisterFormOpen: PropTypes.func,
};
