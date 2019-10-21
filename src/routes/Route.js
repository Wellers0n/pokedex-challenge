/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isNew,
  SuccessPage,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  if (isNew && !isPrivate) {
    return <Redirect to="/new" />;
  }

  if (SuccessPage && !isPrivate) {
    return <Redirect to="/new" />;
  }

  return (
    <>
      <Route {...rest} render={props => <Component {...props} />} />
    </>
  );
}
