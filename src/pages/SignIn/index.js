import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { signInRequest } from '../../store/modules/auth/actions';

import Button from '../../components/Button';
import pokeball from '../../assets/pokeball.svg';

import { Container, StyledForm, StyledInput } from './styles';
import { resquestCroctAction } from '../../store/modules/croct/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  firstName: Yup.string()
    .required('O nome é obrigatório'),
  lastName: Yup.string()
    .required('O sobrenome é obrigatório'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, firstName, lastName }) {
    dispatch(signInRequest(email, firstName, lastName));
  }

  useEffect(() => {
    dispatch(resquestCroctAction());
  }, [])


  return (
    <Container>
      <img src={pokeball} alt="pokeball" />
      <StyledForm onSubmit={handleSubmit} schema={schema}>
        <StyledInput
          name="email"
          type="email"
          placeholder="Seu melhor e-mail"
        />
        <StyledInput
          name="firstName"
          type="text"
          placeholder="Nome"
        />
        <StyledInput
          name="lastName"
          type="text"
          placeholder="sobrenome"
        />

        <Button type="submit">{loading ? 'Carregando..' : 'Acessar'}</Button>
      </StyledForm>
    </Container>
  );
}
