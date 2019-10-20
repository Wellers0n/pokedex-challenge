import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import AddItem from './pages/AddItem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" exact component={Home} />
      <Route path="/new" exact component={AddItem} />
    </Switch>
  );
}
