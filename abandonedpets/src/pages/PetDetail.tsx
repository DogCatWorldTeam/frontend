import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
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

interface ShelterInfo {
  name: string;
  coordinate: {
    latitude: number;
    longitude: number;
  } | null;
  careNm: string;
  careTel: string;
  careAddr: string;
}

interface PetDetail {
  id: number;
  desertionNo: number;
  filename: string;
  happenDt: string;
  happenPlace: string;
  petType: string;
  kindCd: string;
  colorCd: string;
  age: string;
  weight: string;
  noticeNo: string;
  noticeSdt: string;
  noticeEdt: string;
  popfile: string;
  processState: string;
  sexCd: string;
  neuterYn: string;
  specialMark: string;
  shelter: ShelterInfo;
  publicApi: boolean;
}

function PetDetail() {
  const { id } = useParams<{ id: string }>();
  const [petDetail, setPetDetail] = useState<PetDetail | null>(null);
  const [isAdoption, setIsAdoption] = useState<boolean>(false);

  useEffect(() => {
    const fetchPetDetail = async () => {
      try {
        const response = await axios.get<PetDetail>(
          `http://localhost:8080/api/v1/petinfo/${id}`,
        );
        console.log(response);
        setPetDetail(response.data);
        setIsAdoption(response.data.processState.includes('종료'));
      } catch (error) {
        console.error('Error fetching pet details:', error);
      }
    };

    fetchPetDetail();
  }, [id]);

  if (!petDetail) {
    return <div>Loading...</div>;
  }
  // console.log(petDetail);
  // console.log(isAdoption);
  console.log(petDetail);

  return (
    <>
      <NavBar />
      <Info petInfo={petDetail} petState={isAdoption} />
      <BtnWrapper>
        {petDetail.publicApi ? null : <SendMessageBtn chatInfo={petDetail} />}
        <FavoriteBtn />
      </BtnWrapper>
      <ImgList />
    </>
  );
}

export default PetDetail;
