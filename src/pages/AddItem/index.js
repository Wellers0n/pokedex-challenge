import React from 'react';
import { Scope } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { MdCameraAlt } from 'react-icons/md';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addPokemonRequest } from '../../store/modules/pokemon/actions';

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
import AvatarInputs from '../../components/AvatarInputs';

const schema = Yup.object().shape({
  avatar: Yup.string(),
  name: Yup.string().required('O nome é obrigatório'),
  types: Yup.string().required('O Tipo é obrigatório'),
  description: Yup.string().required('A descrição é obrigatório'),

  attributes: Yup.object({
    atk: Yup.number()
      .max(120)
      .required('O atk é obrigatório'),
    def: Yup.number(),
    spd: Yup.number(),
    sp_atack: Yup.number(),
    sp_def: Yup.number(),
    HP: Yup.number(),
  }),
  abillities: Yup.object({
    abillity: Yup.object({
      abillity_name: Yup.string().required('A Skill é obrigatória'),
      abillity_strengh: Yup.number().required('A Skill é obrigatória'),
      short_effect: Yup.string().required('A Skill é obrigatória'),
    }),
    abillity_2: Yup.object({
      abillity_name: Yup.string(),
      abillity_strengh: Yup.number(),
      short_effect: Yup.string(),
    }),
  }),
});

const initialData = {
  name: 'pikachu',
  types: 'Fire',
  description: 'a nice pokemon',
  attributes: {
    atk: 15,
    def: 15,
    spd: 15,
    sp_atack: 15,
    sp_def: 15,
    HP: 15,
  },
  abillities: {
    abillity: {
      abillity_name: 'fire',
      abillity_strengh: 15,
      short_effect: 'a nice ball of fire',
    },
    abillity_2: {
      abillity_name: 'water',
      abillity_strengh: 17,
      short_effect: 'a nice splash of water',
    },
  },
};

export default function AddItem() {
  const dispatch = useDispatch();
  function handleSubmit(data) {
    dispatch(addPokemonRequest(data));

    // resetForm();
  }
  return (
    <Wrapper>
      <Container>
        <StyledForm
          initialData={initialData}
          schema={schema}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <MdCameraAlt size={30} />
            <AvatarInputs
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
          <hr />
          <hr />

          <Scope path="attributes">
            <Label>Atk*</Label>

            <StyledInput
              type="number"
              name="atk"
              min="15"
              max="120"
              placeholder="atk"
            />
            <Label>Def*</Label>

            <StyledInput
              type="number"
              name="def"
              min="15"
              max="120"
              placeholder="def"
            />
            <Label>Spd*</Label>

            <StyledInput
              type="number"
              name="spd"
              min="15"
              max="120"
              placeholder="spd"
            />
            <Label>Sp-Atack*</Label>

            <StyledInput
              type="number"
              name="sp_atack"
              min="15"
              max="120"
              placeholder="sp-atack"
            />
            <Label>Sp-Def*</Label>

            <StyledInput
              type="number"
              name="sp_def"
              min="15"
              max="120"
              placeholder="sp-def"
            />
            <Label>HP*</Label>

            <StyledInput
              type="number"
              name="HP"
              min="15"
              max="120"
              placeholder="HP"
            />
          </Scope>

          <Divider />

          <Label>Skills*</Label>

          <Scope path="abillities">
            <Scope path="abillity">
              <hr />
              <Label>First Abillity</Label>

              <StyledInput name="abillity_name" placeholder="abillity_name" />
              <StyledInput
                name="abillity_strengh"
                type="number"
                min="15"
                max="120"
                placeholder="abillity_strengh"
              />

              <StyledInput name="short_effect" placeholder="short_effect" />
            </Scope>
          </Scope>

          <Scope path="abillities">
            <Scope path="abillity_2">
              <Label>Second Abillity</Label>

              <StyledInput name="abillity_name" placeholder="abillity_name" />
              <StyledInput
                name="abillity_strengh"
                type="number"
                min="15"
                max="120"
                placeholder="abillity_strengh"
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
