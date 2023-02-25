import { type } from 'os';
import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleTotal: () => void;
  isDisabled: boolean;
}

export const Button = ({ type, handleTotal, isDisabled }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={handleTotal} disabled={isDisabled}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};
