import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const ChatArea = styled.div`
  min-height: 200px;
  overflow-y: scroll;
  font-family: 'Lato';
  padding: 12px;
`;

export const InputArea = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.3);
  padding: 6px;
  display: flex;
  gap: 6px;
`;
