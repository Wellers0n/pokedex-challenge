import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import { Container } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const logged = useSelector(state => state.auth.token);

  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <p>Pokemon</p>
      <button type="button" onClick={handleLogout}>
        {logged !== null ? 'Logout' : ''}
      </button>
    </Container>
  );
}