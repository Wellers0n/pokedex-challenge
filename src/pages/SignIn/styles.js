import styled from 'styled-components';

import { Form, Input } from '@rocketseat/unform';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 120px);
  img {
    margin-bottom: 20px;
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  max-width: 400px;
  border: 1px solid ${colors.darkestWhite};
  margin-bottom: 15px;
`;
