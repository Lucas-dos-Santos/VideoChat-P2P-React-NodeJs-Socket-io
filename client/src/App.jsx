import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import './app.scss';

function App() {
  return (
    <div className="box-wrapper">
      <AppBar position="static" color="inherit" className="app-bar">
        <Typography variant="h2" align="center">
          Video Chat App
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
