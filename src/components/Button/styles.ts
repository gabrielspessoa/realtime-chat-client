import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  line-height: 40px;
  width: auto;
  border: 0;
  background-color: #0073b6;
  border-radius: 3px;
  font-size: 14px;
  color: #fff;
  padding: 0 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #0a88d1;
  }

  &:active {
    background-color: #0065a0;
  }
`;
