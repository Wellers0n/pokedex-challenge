/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import star from '../../assets/star.svg';
import profile from '../../assets/profile.png';
import history from '../../services/history';

import {
  getPokemonsRequest,
  loadMore,
} from '../../store/modules/pokemon/actions';

import { Wrapper, ActionBar, Container } from './styles';
import ListItem from '../../components/ListItem';
import MyPokemonList from '../../components/MyPokemonList';
import { getUserAction, userReturningAction } from '../../store/modules/croct/actions';

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.pokemon.loading);
  const pokemon = useSelector(state => state.pokemon.pokemon.length);
  const profileCroct = useSelector(state => state.croct.profile);
  const loadingCroct = useSelector(state => state.croct.loading);

  useEffect(() => {
    dispatch(getUserAction());
    dispatch(getPokemonsRequest());
    dispatch(userReturningAction());


  }, []);

  function handleNew() {
    history.push('/');
  }

  function handleLoadMore(qty) {
    dispatch(loadMore(qty));
  }
  return (
    <Wrapper>
      <Container>
        <h1>{`hello ${loadingCroct ? '...' : profileCroct.name}, Welcome to the pokedex`}</h1>
        <ActionBar>
          <Link to="/profile" onClick={handleNew}>
            <Button type="button">
              <img src={profile} alt="profile" />
              Profile
            </Button>
          </Link>
          <Link to="/new" onClick={handleNew}>
            <Button type="button">
              <img color={'yellow'} src={star} alt="star" />
              Add
            </Button>
          </Link>
        </ActionBar>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
            <>
              <MyPokemonList />
              <ListItem />
              <Button type="button" onClick={() => handleLoadMore(pokemon)}>
                Load More{' '}
              </Button>
            </>
          )}
      </Container>
    </Wrapper>
  );
}
