import styled from 'styled-components';
import { Form, Input, Textarea, Select, Choice } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';
import media from '../../styles/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  border-radius: 4px;
  max-width: 700px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 30px;
  padding: 30px;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input[type='file'] {
    display: transparent;
    opacity: 0;
    cursor: pointer;
    width: 100%;
  }

  span {
    color: red;
  }
`;

export const StyledInput = styled(Input)`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid ${colors.darkestWhite};
  margin: 15px;
  align-self: flex-end;
`;
export const Label = styled.label`
  width: 100%;
  padding: 10px;
  align-self: flex-start;
  /* background-color: ${colors.mostDarkestWhite}; */
  font-weight: bold;
  border-radius: 4px;
  color: ${colors.ink};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 20px;
  @media ${media.medium} {
    button {
      margin: 0 3px;
    }
  }
`;

export const TextInput = styled(Textarea)`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid ${colors.darkestWhite};
  margin: 15px;
  align-self: flex-end;
`;

export const SelectInput = styled(Select)`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid ${colors.darkestWhite};
  margin: 15px;
  align-self: flex-end;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  input[type='checkbox'] {
    border-radius: 4px;
    width: 20px;
    height: 20px;
    appearance: none;
    outline: 0;
    background: ${colors.darkestWhite};
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;

    :checked {
      background: ${colors.blue};
    }
  }
  span {
    margin: 30px;
  }
`;
export const StyledChoice = styled(Choice)`
  display: flex;
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid ${colors.darkestWhite};
  margin: 15px;
  align-self: flex-end;
`;

export const AvatarInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background: ${colors.darkWhite};
  border-radius: 60px;

  position: relative;
  border: 1px solid ${colors.darkestWhite};

  svg {
    position: absolute;
    top: 50;
    right: 50;
    color: ${colors.darkestWhite};
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.darkestWhite};
  margin: 30px 0;
`;

export const StyledLink = styled(Link)`
  display: flex;
  padding: 15px;
  background: ${colors.blue};
  text-decoration: none;
  font-weight: bold;
  color: ${colors.white};
  border-radius: 4px;
  max-width: 700px;
  transition: all 0.2s ease-in;
  margin: 0 20px 50px 20px;
  width: 100%;
  justify-content: center;

  &:hover {
    background: ${colors.red};
  }
`;
