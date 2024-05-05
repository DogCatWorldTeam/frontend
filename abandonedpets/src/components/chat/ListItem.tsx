import styled from "styled-components";

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #D9D9D9;
`

const ChatBtn = styled.button`
  width: 7.5rem;
  height: 2rem;
  border-radius: 5px;
  border: none;
  background-color: #FFEEEE;
  text-align: center;
  line-height: 2rem;

  &: hover{
    cursor: pointer;
    background-color: #FFE4E4;
  }
`

interface ListProps {
    title: string,
    name: string,
    chat: string,
};

function ListItem({ title, name, chat }: ListProps) {
    return (
        <List>
            <div>{title}</div>
            <div>{name}</div>
            <div>{chat}</div>
            <ChatBtn type="button">채팅하기</ChatBtn>
        </List>
    )
}

export default ListItem;