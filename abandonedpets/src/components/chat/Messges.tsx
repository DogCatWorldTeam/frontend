import styled from 'styled-components';

const MessagesContainer = styled.div`
  height: 530px;
  overflow-y: auto;
  margin: 10px 0;
`;

function Messages() {
  return <MessagesContainer>채팅 메세지</MessagesContainer>;
}

export default Messages;
