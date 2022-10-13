import * as S from './styles';
import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  $margin?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <S.Input {...props} />;
});
