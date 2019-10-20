import React from 'react';
import { Link } from 'react-router-dom';
import { MdCameraAlt } from 'react-icons/md';

import {
  Container,
  StyledForm,
  StyledInput,
  Label,
  Wrapper,
  ButtonWrapper,
  TextInput,
} from './styles';
import Button from '../../components/Button';

export default function AddItem() {
  function handleSubmit(data) {
    // body
  }
  return (
    <Wrapper>
      <Container>
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <MdCameraAlt size={30} />
            <StyledInput
              type="file"
              name="avatar"
              placeholder="Pokemon Avatar"
            />
          </div>

          <Label>Pokemon Name*</Label>
          <StyledInput name="name" placeholder="pokemon name" />
          <Label>Description</Label>
          <TextInput name="description" placeholder="Description" />

          <Label>Type*</Label>
          <StyledInput name="type" placeholder="Element Type" />
          <Label>Attributes*</Label>
          <StyledInput name="attributes" placeholder="Attributes" />
          <Label>Skills*</Label>
          <StyledInput name="skills" placeholder="Skills" />
          <ButtonWrapper>
            <Button>Cadastrar</Button>
            <Button>
              <Link to="/home">Voltar</Link>
            </Button>
          </ButtonWrapper>
        </StyledForm>
      </Container>
    </Wrapper>
  );
}
