import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import AddItem from '../pages/AddItem';
import SuccessPage from '../components/SuccessPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/new" exact component={AddItem} isPrivate isNew />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/success" component={SuccessPage} isPrivate SuccessPage />
    </Switch>
  );
}
