import { useState } from 'react';
import NavBar from '../components/NavBar';
import Info from '../components/petDetail/Info';
import SendMessageBtn from '../components/petDetail/SendMessageBtn';
import DetailText from '../components/petDetail/DetailText';
import ImgList from '../components/petDetail/ImgList';
import Chat from '../components/modal/Chat';

function PetDetail() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const ChatHandler = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {isChatOpen && <Chat onConfirm={ChatHandler} />}
      <NavBar />
      <Info />
      <SendMessageBtn onConfirm={ChatHandler} />
      <DetailText />
      <ImgList />
    </>
  );
}

export default PetDetail;
