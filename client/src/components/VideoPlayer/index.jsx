import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import './styles.scss';

import { SocketContext } from '../../contexts/socketContext';

const VideoPlayer = () => {
  const {
    name,
    myVideo,
    userVideo,
    callAccepted,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext);

  return (
    <Grid container className="grid-container">
      {stream && (
      <Paper className="paper">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            {name || 'Myname'}
          </Typography>
          <video playsInline ref={myVideo} autoPlay className="video" />
        </Grid>
      </Paper>
      )}
      {callAccepted && !callEnded && (
      <Paper className="paper">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            {call.name || 'Name'}
          </Typography>
          <video playsInline ref={userVideo} autoPlay className="video" />
        </Grid>
      </Paper>
      )}
    </Grid>
  );
};
export default VideoPlayer;
