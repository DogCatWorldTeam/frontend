import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Info from '../components/petDetail/Info';
import SendMessageBtn from '../components/petDetail/SendMessageBtn';
import FavoriteBtn from '../components/petDetail/FavoriteBtn';
import ImgList from '../components/petDetail/ImgList';

const BtnWrapper = styled.div`
  width: 25rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

function PetDetail() {
  return (
    <>
      <NavBar />
      <Info />
      <BtnWrapper>
        <SendMessageBtn />
        <FavoriteBtn />
      </BtnWrapper>
      <ImgList />
    </>
  );
}

export default PetDetail;
