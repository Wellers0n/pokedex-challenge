/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPokemonsRequest,
  getPokemonHabillitiesRequest,
} from '../../store/modules/pokemon/actions';

import Button from '../../components/Button';

import { Container, ActionBar, Wrapper } from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemon.pokemon);
  const info = useSelector(state => state.pokemon.info);

  useEffect(() => {
    dispatch(getPokemonsRequest());
    dispatch(getPokemonHabillitiesRequest());
  }, []);

  return (
    <Wrapper>
      <Container>
        <h1>hello, Welcome to the pokedex</h1>

        <ActionBar>
          <input type="text" placeholder="Faça uma busca" />
          <Button type="button">ADD</Button>
        </ActionBar>
        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={pokemon + index}>
              <img src={info.sprites.front_default} alt="imagem" />
              <span>#{index + 1}</span>
              <strong>{pokemon.name}</strong>
            </li>
          ))}
        </ul>
      </Container>
    </Wrapper>
  );
}
