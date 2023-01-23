import React, { useContext, useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from '@material-ui/core';
import './styles.scss';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { SocketContext } from '../../contexts/socketContext';

const Options = ({ children }) => {
  const {
    user,
    callAccepted,
    name,
    setName,
    leaveCall,
    callUser,
    callEnded,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  const handleClipboard = (event) => {
    event.preventDefault();
    const idClipboard = document.getElementById('id-user').getAttribute('idclipboard');
    navigator.clipboard.writeText(idClipboard);
  };

  return (
    <Container className="container">
      <Paper elevation={10} className="paper">
        <form className="root" noValidate autoComplete="off">
          <Grid container className="grid-container">
            <Grid item xs={12} md={6} className="padding-item">
              <Typography gutterBottom variand="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <Button variant="contained" color="primary" fullWidth onClick={handleClipboard} id="id-user" idclipboard={user} startIcon={<Assignment fontSize="large" />}>
                Copy Your ID
              </Button>
            </Grid>
            <Grid item xs={12} md={6} className="padding-item">
              <Typography gutterBottom variand="h6">Make a Call</Typography>
              <TextField label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<PhoneDisabled fontSize="large" />}
                  onClick={leaveCall}
                  className="margin-item"
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Phone fontSize="large" />}
                  onClick={() => callUser(idToCall)}
                  className="margin-item"
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>

        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
