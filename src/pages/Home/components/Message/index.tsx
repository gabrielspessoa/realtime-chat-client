import * as S from './styles';

export const Message = (props: { children: string; user: string }) => {
  return (
    <S.Container>
      <S.User>{props.user}: </S.User>
      {props.children}
    </S.Container>
  );
};
