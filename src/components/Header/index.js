import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../store/modules/auth/actions';
import logo from '../../assets/logo.svg';
import settings from '../../assets/settings.svg';
import croct from '../../assets/croct.svg';
import { Container, Right, Circle } from './styles';

export default function Header() {

  const dispatch = useDispatch();
  const userIsReturning = useSelector(state => state.croct.userIsReturning);
  const logged = useSelector(state => state.auth.token);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Link to="/home">
        <img src={logo} alt="logo" />
      </Link>

      <Right>
        <button type="button">
          <Circle on={userIsReturning} />
          <img src={croct} alt="croct" />
          <div>croct</div>
        </button>
        <button type="button" onClick={handleLogout}>
          <img src={settings} alt="settings" />
          {logged !== null ? 'Logout' : ''}
        </button>
      </Right>
    </Container>
  );
}
