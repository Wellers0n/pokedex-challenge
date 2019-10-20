import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;

  h1 {
    margin: 30px;
  }
`;

export const ActionBar = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  input {
    padding: 10px;
    border-radius: 3px;
    max-width: 400px;
    border: 1px solid ${colors.darkestWhite};
  }
`;
