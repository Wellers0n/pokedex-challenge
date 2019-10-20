/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';

import { getPokemonsRequest } from '../../store/modules/pokemon/actions';

import { Wrapper, ActionBar, Container } from './styles';
import ListItem from '../../components/ListItem';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsRequest());
  }, []);

  return (
    <Wrapper>
      <Container>
        <h1>hello, Welcome to the pokedex</h1>

        <ActionBar>
          <input type="text" placeholder="Faça uma busca" />
          <Button type="button">ADD</Button>
        </ActionBar>

        <ListItem />
      </Container>
    </Wrapper>
  );
}
