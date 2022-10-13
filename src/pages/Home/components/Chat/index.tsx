import { PaperPlaneTilt } from 'phosphor-react';
import { ReactNode, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { Message } from '../Message';
import * as S from './styles';

export const Chat = (props: { socket: Socket; currentUser: string | null }) => {
  const [messagesRecieved, setMessagesReceived] = useState<
    { message: string; username: string; __createdtime__: string }[]
  >([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    props.socket.on('receive_message', (data) => {
      console.log(data);
      setMessagesReceived((prev) => [
        ...prev,
        {
          message: data.message,
          username: data.username,
          __createdtime__: data.__createdtime__,
        },
      ]);
    });
    return () => {
      props.socket.off('receive_message');
    };
  }, [props.socket]);

  const sendMessage = () => {
    if (inputMessage !== '') {
      const __createdtime__ = Date.now();
      props.socket.emit('send_message', {
        message: inputMessage,
        username: props.currentUser,
        __createdtime__,
      });
      setInputMessage('');
    }
  };

  return (
    <S.Container>
      <S.ChatArea>
        {messagesRecieved.map((msg, index) => {
          return (
            <Message key={index} user={msg.username}>
              {msg.message}
            </Message>
          );
        })}
      </S.ChatArea>
      <S.InputArea>
        <Input
          placeholder='Digite sua mensagem'
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <Button onClick={sendMessage}>
          <PaperPlaneTilt size={18} weight='bold' />
        </Button>
      </S.InputArea>
    </S.Container>
  );
};
