import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { signInRequest } from '../../store/modules/auth/actions';

import Button from '../../components/Button';

import { Container, StyledForm, StyledInput } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email }) {
    dispatch(signInRequest(email));
  }
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit} schema={schema}>
        <StyledInput
          name="email"
          type="email"
          placeholder="Seu melhor e-mail"
        />

        <Button type="submit">{loading ? 'Carregando..' : 'Acessar'}</Button>
      </StyledForm>
    </Container>
  );
}
