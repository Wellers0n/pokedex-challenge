import styled from 'styled-components';
import colors from '../../styles/colors';
import media from '../../styles/media';
import { Input } from '@rocketseat/unform';

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
  > a > button > img {
    margin-right: 8px;
  }
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

export const Avatar = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-image: url("${({img}) => img}");
  margin-bottom: 10px;

`

export const Main = styled.div`
display: flex;
align-items: center;
jujstify-content: center;
flex-direction: column;

`

export const StyledInput = styled(Input)`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  max-width: 400px;
  border: 1px solid ${colors.darkestWhite};
  margin-bottom: 15px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    color: lightblack;
    
  }
`