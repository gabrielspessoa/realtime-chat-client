import styled from 'styled-components';

export const Input = styled.input<{ $margin?: string }>`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: transparent;
  border: solid 2px #ccc;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 14px;
  padding: 0 6px;
  font-family: 'Lato';
  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out;
  margin: ${(props) => (props.$margin ? props.$margin : null)};

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:focus {
    outline: 0;
    border: solid 2px #0073b6;
    background-color: initial;
  }

  &::placeholder {
    opacity: 1;
    color: #bbb;
  }
`;
