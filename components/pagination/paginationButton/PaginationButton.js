import React from 'react';
import { Button } from './styles';

const PaginationButton = ({ children, onClick, active, first, last }) => {
  return (
    <Button active={active} first={first} last={last} onClick={() => onClick()}>
      {children}
    </Button>
  )
}

export default PaginationButton;