import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Root = styled(Dialog.Root)``;
export const Trigger = styled(Dialog.Trigger)``;
export const Portal = styled(Dialog.Portal)``;
export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`;
export const ContentWrapper = styled(Dialog.Content)`
  position: fixed;
  inset: 0;
  height: fit-content;
  display: flex;
  padding: 24px 24px;
  justify-content: center;
  align-items: flex-start;

  &:focus-visible {
    outline: none;
  }

  @keyframes content-open {
    0% {
      scale: 0;
    }

    100% {
      scale: 1;
    }
  }

  @keyframes content-closed {
    0% {
      scale: 1;
    }

    100% {
      scale: 0;
    }
  }

  &[data-state='open'] {
    animation: content-open 0.2s ease-in-out;
  }

  &[data-state='closed'] {
    animation: content-closed 0.2s ease-in-out;
  }
`;
export const Content = styled.div`
  width: min(400px, 100%);
  background-color: #fff;
  border-radius: 6px;
  padding: 12px;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3), 0 3px 5px 0 rgba(0, 0, 0, 0.3);
`;
export const Title = styled(Dialog.Title)`
  margin: 0 0 18px 0;
  font-size: 18px;
  font-weight: 500;
`;
export const Description = styled(Dialog.Description)``;
export const Close = styled(Dialog.Close)``;
