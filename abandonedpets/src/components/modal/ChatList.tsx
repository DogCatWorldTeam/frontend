import styled from 'styled-components';
import ListItem from '../chat/ListItem';

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

const InfoContainer = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #fbe8e8;
  text-align: center;
  line-height: 4rem;
  margin-bottom: 0.7rem;
  position: relative;
`;

const InfoText = styled.span`
  font-size: 2.2rem;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 530px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px 0;
  overflow-y: auto;
`;

const MockData = {
  ChatLists: [
    { id: 1, title: '제목 1' },
    { id: 2, title: '제목 2' },
    { id: 3, title: '제목 3' },
    { id: 4, title: '제목 4' },
    { id: 1, title: '제목 1' },
    { id: 2, title: '제목 2' },
    { id: 3, title: '제목 3' },
    { id: 4, title: '제목 4' },
    { id: 1, title: '제목 1' },
    { id: 2, title: '제목 2' },
    { id: 3, title: '제목 3' },
    { id: 4, title: '제목 4' },
  ],
};

function ChatList({ openChatRoom }) {
  return (
    <>
      <ChatContainer>
        <header>
          <InfoText>채팅 목록</InfoText>
        </header>
        <ListWrapper>
          {MockData.ChatLists.map((chat) => (
            <ListItem {...chat} openChatRoom={openChatRoom} />
          ))}
        </ListWrapper>
      </ChatContainer>
    </>
  );
}

export default ChatList;
