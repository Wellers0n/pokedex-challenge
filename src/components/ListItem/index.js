import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getPokemonHabillitiesRequest } from '../../store/modules/pokemon/actions';
import api from '../../services/api';

export default function ListItem() {
  const [poke, setPoke] = useState([]);
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemon.pokemon);
  const info = useSelector(state => state.pokemon.info);

  const urls = pokemons.map(p => p.url);

  const files = urls.map(u => u);

  useEffect(() => {
    // Promise.all([api.get(files[0]), api.get(files[0])]).then(
    //   ([google, apple]) => {
    //     console.log(google);
    //     console.log(apple);
    //   }
    // );

    async function getData() {
      return Promise.all(urls.map(item => api.get(item)));
    }

    getData().then(data => {
      setPoke(data);
    });
  }, []);

  console.tron.log(poke);

  function handleInfo(id) {
    dispatch(getPokemonHabillitiesRequest(id));
  }

  return (
    <>
      {poke.map(p => (
        <li key={p.data.id}>
          <img src={p.data.sprites.front_default} alt="imagem" />
        </li>
      ))}
      {/* <ul>
        {pokemons.map((pokemon, index) => (
          <li key={pokemon + index}>
            <img
              src={
                info.sprites.front_default
                  ? info.sprites.front_default
                  : 'https://api.adorable.io/avatars/87/abott@adorable.png'
              }
              alt="imagem"
            />

            <span>#{index + 1}</span>
            <strong>{pokemon.name}</strong>
            <button type="button" onClick={() => handleInfo(index + 1)}>
              Click me{' '}
            </button>
          </li>
        ))}
      </ul> */}
    </>
  );
}
