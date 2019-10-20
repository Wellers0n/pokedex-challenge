import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  li {
    list-style: none;
    width: 150px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.darkestWhite};
    margin: 5px;
    border-radius: 4px;
    position: relative;
    transition: all 0.1s ease-in;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 6px 17px -6px rgba(0, 0, 0, 0.3);
      background: ${colors.darkWhite};
    }

    &:hover small {
      background: ${colors.red};
    }

    small {
      position: absolute;
      top: 0;
      right: 1px;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      font-weight: bold;
      border-radius: 4px;
      background: ${colors.lightInk};
      color: ${colors.white};
      padding: 3px 6px;
      transition: all 0.2s;
    }

    strong {
      font-size: 21px;
      text-transform: capitalize;
    }

    button {
      margin-top: 10px;
      font-size: 13px;
      color: ${colors.lightInk};
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row-reverse;
      background: none;
      border: none;
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
        margin-right: 3px;
      }
    }
  }
`;
