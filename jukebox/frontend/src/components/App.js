import React, { Component } from 'react';
import HomePage from './HomePage';
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
