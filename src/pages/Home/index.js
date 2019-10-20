/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import star from '../../assets/star.svg';
import history from '../../services/history';

import { getPokemonsRequest } from '../../store/modules/pokemon/actions';

import { Wrapper, ActionBar, Container } from './styles';
import ListItem from '../../components/ListItem';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsRequest());
  }, []);

  function handleNew() {
    history.push('/');
  }

  return (
    <Wrapper>
      <Container>
        <h1>hello, Welcome to the pokedex</h1>

        <ActionBar>
          <Link to="/new" onClick={handleNew}>
            <Button type="button">
              <img src={star} alt="star" />
              Add
            </Button>
          </Link>
        </ActionBar>

        <ListItem />
      </Container>
    </Wrapper>
  );
}
