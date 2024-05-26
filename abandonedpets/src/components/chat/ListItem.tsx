import styled from 'styled-components';
import Button from '@mui/material/Button';

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d9d9d9;
`;

const ChatRoomName = styled.div`
  width: 12rem;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

interface ListProps {
  id: number;
  title: string;
}

function ListItem({ id, title, openChatRoom }: ListProps) {
  return (
    <List>
      <ChatRoomName>{title}</ChatRoomName>
      <BtnContainer>
        <Button
          variant="outlined"
          size="small"
          onClick={() => openChatRoom(id)}
        >
          채팅하기
        </Button>
        <Button variant="outlined" size="small" color="error">
          삭제하기
        </Button>
      </BtnContainer>
    </List>
  );
}

export default ListItem;
