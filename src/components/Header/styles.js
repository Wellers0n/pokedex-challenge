import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  padding: 15px 30px;
  background: ${colors.red};
  color: ${colors.white};
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  img {
    width: 125px;
  }
  button {
    background: none;
    border: none;
    color: ${colors.white};
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
  }
`;

export const Left = styled.div`

`

export const Right = styled.div`
  display: flex;
  > button {
    margin-right: 15px;
  }
`

export const Circle = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-right: 5px;
  background: ${({ on }) => on ? '#08D65B' : 'orange'}
`