import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Delete from '../../assets/freedom.svg';
import egg from '../../assets/egg.svg';
import { deletePokemonRequest } from '../../store/modules/pokemon/actions';

import { Wrapper } from '../ListItem/styles';
import { Container } from './styles';

export default function MyPokemonList() {
  const myPokemons = useSelector(state => state.pokemon.myPokemons);
  const dispatch = useDispatch();

  function handleDelete(index) {
    dispatch(deletePokemonRequest(index));
  }

  function handleDisplay() {
    if (myPokemons.lengh !== 0) {
      return (
        <>
          <Container>
            <h1>My Pokemons</h1>
            <Wrapper>
              {myPokemons.map((p, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <small>#{index + 1}</small>
                  <img src={egg} alt="avatar" />
                  <strong>{p.name}</strong>

                  <button type="button" onClick={() => handleDelete(index)}>
                    Delete
                    <img src={Delete} alt="delete" />
                  </button>
                </li>
              ))}
            </Wrapper>
          </Container>
        </>
      );
    }
    return <h1>Consider add one pokemon</h1>;
  }
  return <>{handleDisplay()}</>;
}
