import React from 'react';
import { Scope } from '@rocketseat/unform';
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
  StyledLink,
} from './styles';
import Button from '../../components/Button';
import AvatarInputs from '../../components/AvatarInputs';

const schema = Yup.object().shape({
  avatar: Yup.string(),
  name: Yup.string().required('O nome é obrigatório'),
  types: Yup.string().required('O Tipo é obrigatório'),
  description: Yup.string().required('A descrição é obrigatório'),

  attributes: Yup.object({
    atk: Yup.number().typeError('atk must be a number and it is required'),
    def: Yup.number().typeError('def must be a number and it is required'),
    spd: Yup.number().typeError('spd must be a number and it is required'),
    sp_atack: Yup.number().typeError(
      'sp-atack must be a number and it is required'
    ),
    sp_def: Yup.number().typeError(
      'sp-def must be a number and it is required'
    ),
    HP: Yup.number().typeError('HP must be a number and it is required'),
  }).required('The attributes are required'),
  abilities: Yup.object({
    ability: Yup.object({
      ability_name: Yup.string().required('A Skill é obrigatória'),
      ability_strengh: Yup.number()
        .typeError('Ability Strengh must be a number and it is required')
        .required('A Skill é obrigatória'),
      short_effect: Yup.string().required('A Skill é obrigatória'),
    }),
    ability_2: Yup.object({
      ability_name: Yup.string(),
      ability_strengh: Yup.number().typeError(
        'Ability Strengh must be a number '
      ),
      short_effect: Yup.string(),
    }),
    ability_3: Yup.object({
      ability_name: Yup.string(),
      ability_strengh: Yup.number()
        .nullable()
        .typeError('Ability Strengh must be a number'),

      short_effect: Yup.string(),
    }),
  }),
});

const initialData = {
  name: 'Psyduck',
  types: ['Water'],
  description: `Psyduck uses a mysterious power. When it does so, this Pokémon 
  generates brain waves that are supposedly only seen in sleepers.
  `,
  attributes: {
    atk: 52,
    def: 48,
    spd: 55,
    sp_atack: 65,
    sp_def: 50,
    HP: 50,
  },
  abilities: {
    ability: {
      ability_name: 'Damp',
      ability_strengh: 90,
      short_effect: 'Prevents the use of self-destructing moves.',
    },
    ability_2: {
      ability_name: 'Cloud Nine',
      ability_strengh: 17,
      short_effect: 'Eliminates the effects of weather',
    },
    ability_3: {
      ability_name: '',
      ability_strengh: 17,
      short_effect: '',
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
                { value: 'Ice', label: 'Ice' },
                { value: 'Ghost', label: 'Ghost' },
                { value: 'Eletric', label: 'Eletric' },
                { value: 'Psychic', label: 'Psychic' },
                { value: 'Rock', label: 'Rock' },
                { value: 'Dark', label: 'Dark' },
                { value: 'Ground', label: 'Ground' },
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

          <Scope path="abilities">
            <Scope path="ability">
              <hr />
              <Label>First ability</Label>

              <StyledInput name="ability_name" placeholder="ability name" />
              <StyledInput
                name="ability_strengh"
                type="number"
                min="15"
                max="120"
                placeholder="ability_strengh"
              />

              <StyledInput name="short_effect" placeholder="short effect" />
            </Scope>
          </Scope>

          <Divider />

          <Scope path="abilities">
            <Scope path="ability_2">
              <Label>Second ability</Label>

              <StyledInput name="ability_name" placeholder="ability name" />
              <StyledInput
                name="ability_strengh"
                type="number"
                min="15"
                max="120"
                placeholder="ability_strengh"
              />

              <StyledInput name="short_effect" placeholder="short effect" />
            </Scope>
          </Scope>
          <Scope path="abilities">
            <Scope path="ability_3">
              <Label>Third ability</Label>

              <StyledInput name="ability_name" placeholder="ability name" />
              <StyledInput
                name="ability_strengh"
                type="number"
                min="15"
                max="120"
                placeholder="ability_strengh"
              />

              <StyledInput name="short_effect" placeholder="short effect" />
            </Scope>
          </Scope>

          <ButtonWrapper>
            <Button type="submit">Cadastrar</Button>
          </ButtonWrapper>
        </StyledForm>
        <StyledLink to="/home">Voltar</StyledLink>
      </Container>
    </Wrapper>
  );
}
