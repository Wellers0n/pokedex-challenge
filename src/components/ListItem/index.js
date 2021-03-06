import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Delete from '../../assets/freedom.svg';
import { useDispatch } from 'react-redux';

import { Wrapper } from './styles';

import api from '../../services/api';

import { setPokemonViewedAction } from '../../store/modules/croct/actions';


export default function ListItem(props) {
  const [poke, setPoke] = useState([]);
  const pokemons = useSelector(state => state.pokemon.pokemon);
  const urls = pokemons.map(p => p.url);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      return Promise.all(urls.map(item => api.get(item)));
    }

    getData().then(data => {
      setPoke(data);
    });
  }, [pokemons]);

  function handleDelete(id) {
    const Index = poke.filter(p => p.data.id !== id);
    setPoke(Index);
  }

  return (
    <>
      <Wrapper>
        {poke.map(p => (
          <li onMouseLeave={() => dispatch(setPokemonViewedAction(p.data.name))} key={p.data.id}>
            <small>#{p.data.id}</small>
            <img src={p.data.sprites.front_default} alt="imagem" />
            <strong>{p.data.name}</strong>

            <button type="button" onClick={() => handleDelete(p.data.id)}>
              Delete
              <img src={Delete} alt="delete" />
            </button>
          </li>
        ))}
      </Wrapper>
    </>
  );
}
