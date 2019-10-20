import React from 'react';
import { Scope } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { MdCameraAlt } from 'react-icons/md';
import * as Yup from 'yup';

import {
  Container,
  StyledForm,
  StyledInput,
  Label,
  Wrapper,
  ButtonWrapper,
  StyledChoice,
  ChoiceContainer,
  AvatarInput,
  Divider,
} from './styles';
import Button from '../../components/Button';

const schema = Yup.object().shape({
  // file: Yup.string(),

  name: Yup.string().required('O nome é obrigatório'),
  types: Yup.string().required('O Tipo é obrigatório'),
  description: Yup.string().required('A descrição é obrigatório'),
  skills: Yup.string().required('A Skill é obrigatório'),
  attributes: Yup.object({
    def: Yup.number(),
  }),
});

// const options = [
//   { id: 'terra', title: 'Earth' },
//   { id: 'fogo', title: 'Fire' },
//   { id: 'agua', title: 'Water' },
// ];

export default function AddItem() {
  function handleSubmit(data, { resetForm }) {
    console.log(data);

    resetForm();
  }
  return (
    <Wrapper>
      <Container>
        <StyledForm schema={schema} onSubmit={handleSubmit}>
          <AvatarInput>
            <MdCameraAlt size={30} />
            <StyledInput
              type="file"
              name="avatar"
              placeholder="Pokemon Avatar"
            />
          </AvatarInput>

          <Label>Pokemon Name*</Label>
          <StyledInput name="name" placeholder="Pokemon name" />
          <Label>Description</Label>
          <StyledInput multiline name="description" placeholder="Description" />

          <Label>Type*</Label>
          <ChoiceContainer>
            <StyledChoice
              name="types"
              options={[
                { value: 'Eath', label: 'Eath' },
                { value: 'Wind', label: 'Wind' },
                { value: 'Water', label: 'Water' },
                { value: 'Fire', label: 'Fire' },
                { value: 'Poison', label: 'Poison' },
                { value: 'Grass', label: 'Grass' },
                { value: 'Storm', label: 'Storm' },
              ]}
              multiple
            />
          </ChoiceContainer>

          <Divider />

          <Label>Attributes*</Label>

          <Scope path="attributes">
            <StyledInput
              type="number"
              name="atk"
              min="15"
              max="20"
              placeholder="atk"
            />
            <StyledInput
              type="number"
              name="def"
              min="15"
              max="20"
              placeholder="def"
            />
            <StyledInput
              type="number"
              name="spd"
              min="15"
              max="20"
              placeholder="spd"
            />
            <StyledInput
              type="number"
              name="sp-atack"
              min="15"
              max="20"
              placeholder="sp-atack"
            />
            <StyledInput
              type="number"
              name="sp-def"
              min="15"
              max="20"
              placeholder="sp-def"
            />
            <StyledInput
              type="number"
              name="HP"
              min="15"
              max="20"
              placeholder="HP"
            />
          </Scope>

          <Divider />

          <Label>Skills*</Label>

          <Scope path="abillities">
            <Scope path="abillity">
              <Label>First Abillity</Label>

              <StyledInput name="abillity-name" placeholder="abillity-name" />
              <StyledInput
                name="abillity-strength"
                type="number"
                min="15"
                max="120"
                placeholder="abillity-strength"
              />

              <StyledInput name="short_effect" placeholder="short_effect" />
              <Label>Second Abillity</Label>
              <StyledInput name="abillity-name" placeholder="abillity-name" />
              <StyledInput
                name="abillity-strength"
                type="number"
                min="15"
                max="120"
                placeholder="abillity-strength"
              />

              <StyledInput name="short_effect" placeholder="short_effect" />
              <Label>Third Abillity</Label>

              <StyledInput name="abillity-name" placeholder="abillity-name" />
              <StyledInput
                name="abillity-strength"
                type="number"
                min="15"
                max="120"
                placeholder="abillity-strength"
              />

              <StyledInput name="short_effect" placeholder="short_effect" />
            </Scope>
          </Scope>

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
