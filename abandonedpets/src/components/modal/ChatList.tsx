import styled from "styled-components";
import ListItem from "../chat/ListItem";
import Cencel from "../../assets/Cencel.png";

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: rgba(0, 0, 0, 0.45);
`;

const Modal = styled.div`
  position: fixed;
  border: 1px solid #F6D9D9;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 60rem;
  height: 50rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InfoContainer = styled.div`
  width: 60rem;
  height: 4rem;
  background-color: #FBE8E8;
  text-align: center;
  line-height: 4rem;
  margin-bottom: 0.7rem;
  position: relative;
`

const Img = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);

  &:hover{
    cursor: pointer;
  }
`

const ListWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 5%;
`

const MockData = {
    ChatLists: [
        { title: '제목 1', name: ' 이름1', chat: 'talk1' },
        { title: '제목 2', name: ' 이름2', chat: 'talk2' },
        { title: '제목 3', name: ' 이름3', chat: 'talk3' },
        { title: '제목 4', name: ' 이름4', chat: 'talk4' },
    ]
}

function ChatList() {
    return (
        <>
            <Backdrop />
            <Modal>
                <InfoContainer>
                    채팅 목록
                    <Img src={Cencel} alt="닫기" />
                </InfoContainer>
                <ListWrapper>
                    {MockData.ChatLists.map((chat) => (
                        <ListItem {...chat} />
                    ))}
                </ListWrapper>
            </Modal>
        </>
    )
}

export default ChatList;