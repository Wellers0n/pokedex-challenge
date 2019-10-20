import styled from 'styled-components';
import colors from '../../styles/colors';
import media from '../../styles/media';

export const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 12px;
  background: ${colors.darkBlue};
  color: ${colors.white};
  transition: background 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  img {
    width: 23px;
    height: 23px;
  }

  @media ${media.medium} {
    width: 100%;
  }

  &:hover {
    background: ${colors.red};
  }
`;
