import { ReactNode, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { Button } from '../Button';
import { Input } from '../Input';
import * as S from './styles';

export const Dialog = (props: {
  trigger: ReactNode;
  username: string | null;
  setUsername: (value: string) => void;
}) => {
  const [inputText, setInputText] = useState('');
  return (
    <S.Root defaultOpen open={props.username ? false : true}>
      <S.Trigger asChild>{props.trigger}</S.Trigger>
      <S.Portal>
        <S.Overlay />
        <S.ContentWrapper
          onEscapeKeyDown={(e: Event) => {
            e.preventDefault();
          }}
          onInteractOutside={(e: Event) => e.preventDefault()}
        >
          <S.Content>
            <S.Title>Insira seu nome</S.Title>
            <Input
              placeholder='Username'
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' && props.setUsername(inputText)
              }
              $margin='0 0 12px 0'
            />
            <Button onClick={() => props.setUsername(inputText)}>
              Confirmar
            </Button>
          </S.Content>
        </S.ContentWrapper>
      </S.Portal>
    </S.Root>
  );
};
