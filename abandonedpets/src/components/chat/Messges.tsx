import styled from 'styled-components';

const MessagesContainer = styled.div`
  height: 530px;
  overflow-y: auto;
  margin: 20px 0 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Message = styled.div`
  max-width: 60%; /* 최대 너비를 설정하여 메시지가 너무 길어지지 않도록 함 */
  padding: 10px;
  font-size: 0.875rem;
  border-radius: 8px;
  word-wrap: break-word; /* 단어가 박스를 넘지 않도록 함 */
`;

const SendMessage = styled(Message)`
  align-self: flex-end;
  background-color: #4784fb;
  color: #fff;
  border-radius: 8px 8px 0 8px;
`;

const ReceiveMessage = styled(Message)`
  align-self: flex-start;
  background-color: #e2e2e2;
  color: #000;
  border-radius: 8px 8px 8px 0;
`;

function Messages() {
  return (
    <MessagesContainer>
      <SendMessage>안녕하세요 ddddddddddddddddddddddddddddddddd</SendMessage>
      <ReceiveMessage>
        네 안녕하세요! ddddddddddddddddddddddddddddddddd
      </ReceiveMessage>
      <ReceiveMessage>무슨일이세요?</ReceiveMessage>
    </MessagesContainer>
  );
}

export default Messages;
