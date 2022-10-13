import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 24px auto;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const Username = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
  color: #444;
  font-family: 'Lato';

  & > span {
    color: #000;
    font-weight: 600;
  }
`;

export const ChangeUserBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: none;
  padding: 4px;
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;
