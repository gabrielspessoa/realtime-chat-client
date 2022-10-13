import { ButtonHTMLAttributes, forwardRef } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <S.Button {...props}>{props.children}</S.Button>;
  }
);
