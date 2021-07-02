import React, { Component } from 'react';
import HomePage from './HomePage';
import RoomJoin from './RoomJoin';
import CreateRoom from './CreateRoom';
import { render } from 'react-dom';

function App(props) {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;

const appDiv = document.getElementById('app');
render(<App />, appDiv);
