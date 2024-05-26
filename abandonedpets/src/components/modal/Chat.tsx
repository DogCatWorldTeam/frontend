import styled from 'styled-components';
import InfoBar from '../chat/InfoBar';
import Messages from '../chat/Messges';
import Input from '../chat/Input';

const ChatContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 22px;
  width: 390px;
  height: 600px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding: 16px;
`;

function Chat({ talkId, close }) {
  console.log(talkId);

  return (
    <ChatContainer>
      <InfoBar close={close} />
      <Messages />
      <Input />
    </ChatContainer>
  );
}

export default Chat;
