import NavBar from "../components/NavBar";
import Info from "../components/petDetail/Info";
import SendMessageBtn from "../components/petDetail/SendMessageBtn";
import DetailText from "../components/petDetail/DetailText";
import ImgList from "../components/petDetail/ImgList";

function PetDetail() {
  return (
    <>
      <NavBar />
      <Info />
      <SendMessageBtn />
      <DetailText />
      <ImgList />
    </>
  )
}

export default PetDetail;
