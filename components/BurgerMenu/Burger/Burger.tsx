import React, { useEffect } from 'react';
import { StyledBurger, StyledWrapperBurger } from './StyledBurger';

type burgerType = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

const Burger: React.FC<burgerType> = ({ open, setOpen }) => {
  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <StyledWrapperBurger>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </StyledWrapperBurger>
  );
};

export default Burger;
