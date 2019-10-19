import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  padding: 30px;
  background: ${colors.red};
  color: ${colors.white};
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  button {
    background: none;
    border: none;
    color: ${colors.white};
    font-weight: bold;
    cursor: pointer;
  }
`;
