import { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Info from '../components/petDetail/Info';
import SendMessageBtn from '../components/petDetail/SendMessageBtn';
import FavoriteBtn from '../components/petDetail/FavoriteBtn';
import DetailText from '../components/petDetail/DetailText';
import ImgList from '../components/petDetail/ImgList';
import Chat from '../components/modal/Chat';

const BtnWrapper = styled.div`
  width: 25rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

function PetDetail() {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const ChatHandler = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {isChatOpen && <Chat onConfirm={ChatHandler} />}
      <NavBar />
      <Info />
      <BtnWrapper>
        <SendMessageBtn onConfirm={ChatHandler} />
        <FavoriteBtn />
      </BtnWrapper>
      <DetailText />
      <ImgList />
    </>
  );
}

export default PetDetail;
