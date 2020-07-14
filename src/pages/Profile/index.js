/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import ListItemPokeViewed from '../../components/ListItem/ListItemPokeViewed';

import back from '../../assets/back.png';
import history from '../../services/history';

import { Wrapper, ActionBar, Container, Main, Avatar, StyledInput, ContainerInput } from './styles';
import { userReturningAction, getPokemonViewedAction, getUserAction } from '../../store/modules/croct/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.croct.profile);
  const pokemonsViewed = useSelector(state => state.croct.pokemonsViewed);
  const loading = useSelector(state => state.croct.loading);


  useEffect(() => {
    dispatch(getPokemonViewedAction());
    dispatch(userReturningAction());
    dispatch(getUserAction());
  }, []);

  function handleNew() {
    history.push('/');
  }

  return (
    <Wrapper>
      <Container>
        <h1>{`hello ${loading ? '...' : profile.name}, Welcome to the profile`}</h1>

        <ActionBar>
          <Link to="/" onClick={handleNew}>
            <Button type="button">
              <img src={back} alt="back" />
              Back
            </Button>
          </Link>
        </ActionBar>
        <Main>
          <Avatar img={profile.avatar} alt="back" />
          <ContainerInput>
            <label>Full Name</label>
            <StyledInput
              name="FullName"
              type="email"
              value={loading ? '...' : profile.name}
              disabled={true}
            />
          </ContainerInput>
          <ContainerInput>
            <label>Email</label>
            <StyledInput
              name="email"
              value={loading ? '...' : profile.email}
              type="text"
              disabled={true}
            />
          </ContainerInput>
          <ContainerInput>
            <label>First Name</label>
            <StyledInput
              name="FristName"
              value={loading ? '...' : profile.firstName}
              type="text"
              disabled={true}
            />
          </ContainerInput>
          <ContainerInput>
            <label>Last Name</label>
            <StyledInput
              name="LastName"
              value={loading ? '...' : profile.lastName}
              type="text"
              disabled={true}
            />


          </ContainerInput>
            <h1>{`Pokemons viewed`}</h1>
            <ListItemPokeViewed pokes={pokemonsViewed} />
        </Main>

      </Container>
    </Wrapper>
  );
}
