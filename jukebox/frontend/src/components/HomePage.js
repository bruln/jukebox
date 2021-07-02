import React from 'react';
import RoomJoin from './RoomJoin';
import CreateRoom from './CreateRoom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

export default function HomePage() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <p>Home Page</p>
        </Route>
        <Route path='/join' component={RoomJoin} />
        <Route path='/create' component={CreateRoom} />
      </Switch>
    </Router>
  );
}
