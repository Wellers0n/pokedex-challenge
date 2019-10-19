import React from 'react';

import { StyledButton } from './styles';

export default function Button({ children, ...options }) {
  return <StyledButton {...options}>{children}</StyledButton>;
}
