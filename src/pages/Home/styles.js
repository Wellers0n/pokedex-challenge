import styled from 'styled-components';
import colors from '../../styles/colors';
import media from '../../styles/media';

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

  button {
    margin: 15px 0;
    height: 45px;
  }

  h1 {
    margin: 30px;
  }
`;

export const ActionBar = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;

  a {
    color: ${colors.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${media.medium} {
      width: 100%;
    }
  }
`;
