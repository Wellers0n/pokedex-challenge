import styled from 'styled-components';
import { Form, Input, Textarea } from '@rocketseat/unform';
import colors from '../../styles/colors';

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

  input[type='file'] {
    display: transparent;
    opacity: 0;
    cursor: pointer;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    background: ${colors.darkWhite};
    border-radius: 60px;
    cursor: pointer;
    position: relative;

    svg {
      position: absolute;
      top: 50;
      right: 50;
      color: ${colors.darkestWhite};
    }
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
  align-self: flex-start;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const TextInput = styled(Textarea)`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid ${colors.darkestWhite};
  margin: 15px;
  align-self: flex-end;
`;
