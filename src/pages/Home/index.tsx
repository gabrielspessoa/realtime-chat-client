import { Pencil } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Button } from '../../components/Button';
import { Dialog } from '../../components/Dialog';
import { Input } from '../../components/Input';
import { Chat } from './components/Chat';
import * as S from './styles';

export const Home = () => {
  const [username, setUsername] = useState<string | null>(null);

  const socket = io('https://person-chat.herokuapp.com');

  useEffect(() => {
    if (username && username !== '') {
      socket.emit('join', { username });
      socket.on('chatroom_users', (data) => console.log(data));
    }
  }, [username]);

  return (
    <S.Container>
      <S.Username>
        Nome: <span>{username}</span>
        <Dialog
          trigger={
            <S.ChangeUserBtn onClick={() => setUsername(null)}>
              <Pencil size={18} />
            </S.ChangeUserBtn>
          }
          username={username}
          setUsername={setUsername}
        />
      </S.Username>
      <Chat socket={socket} currentUser={username} />
    </S.Container>
  );
};
