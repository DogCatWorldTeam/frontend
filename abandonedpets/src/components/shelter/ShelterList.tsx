import { useState } from 'react';
import styled from 'styled-components';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Cat from '../../assets/sampleImg/Cat.png';

const ShelterContainer = styled.div`
  width: 50%;
  margin: 3% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShelterInfo = styled.div`
  font-size: 1.5rem;
`;

const MarkerInfo = styled.div`
  background-color: #000;
  padding: 0.5rem;
  color: #fff;
  border-radius: 5px;
`;

const PetContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr); //4개의 열
  gap: 20px;
`;

const InfoDetail = styled.p`
  margin-bottom: 0;
`;

const DefaultMarkerUrl =
  'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

// 타입 정의
interface Pet {
  profile: string; // 이미지 URL이므로 string 타입
  desertionNo: string;
  state: string;
  age: string;
  gender: string;
  kindCd: string;
}

interface Location {
  title: string;
  latlng: { lat: number; lng: number };
  pet?: Pet[];
}

const locations: Location[] = [
  {
    title: '경복궁',
    latlng: { lat: 37.579617, lng: 126.977041 },
    pet: [
      {
        profile: Cat,
        desertionNo: '고유번호',
        state: '보호중',
        age: '2024(년생)',
        gender: '남',
        kindCd: '믹스견',
      },
      {
        profile: Cat,
        desertionNo: '고유번호',
        state: '보호중',
        age: '2024(년생)',
        gender: '남',
        kindCd: '믹스견',
      },
      {
        profile: Cat,
        desertionNo: '고유번호',
        state: '보호중',
        age: '2024(년생)',
        gender: '남',
        kindCd: '믹스견',
      },
      {
        profile: Cat,
        desertionNo: '고유번호',
        state: '보호중',
        age: '2024(년생)',
        gender: '남',
        kindCd: '믹스견',
      },
      {
        profile: Cat,
        desertionNo: '고유번호',
        state: '보호중',
        age: '2024(년생)',
        gender: '남',
        kindCd: '믹스견',
      },
      {
        profile: Cat,
        desertionNo: '고유번호',
        state: '보호중',
        age: '2024(년생)',
        gender: '남',
        kindCd: '믹스견',
      },
      {
        profile: Cat,
        desertionNo: '고유번호',
        state: '보호중',
        age: '2024(년생)',
        gender: '남',
        kindCd: '믹스견',
      },
      {
        profile: Cat,
        desertionNo: '고유번호',
        state: '보호중',
        age: '2024(년생)',
        gender: '남',
        kindCd: '믹스견',
      },
    ],
  },

  { title: '서울 시청', latlng: { lat: 37.566295, lng: 126.977945 } },
  { title: '남산타워', latlng: { lat: 37.551169, lng: 126.988227 } },
  { title: '명동', latlng: { lat: 37.563656, lng: 126.982656 } },
  { title: '이태원', latlng: { lat: 37.534552, lng: 126.994192 } },
  {
    title: '동대문 디자인 플라자',
    latlng: { lat: 37.566295, lng: 127.009369 },
  },
  { title: '한강시민공원', latlng: { lat: 37.516066, lng: 126.966797 } },
  { title: '롯데월드', latlng: { lat: 37.511074, lng: 127.098198 } },
  { title: '서울숲', latlng: { lat: 37.544317, lng: 127.037448 } },
  { title: '홍대입구', latlng: { lat: 37.556161, lng: 126.923642 } },
];

function ShelterList() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );

  return (
    <ShelterContainer>
      <ShelterInfo>가까운 보호소를 클릭해주세요.</ShelterInfo>
      <Map
        center={{ lat: 37.5528803113882, lng: 126.972601286522 }}
        style={{ width: '800px', height: '600px' }}
        level={7}
      >
        {locations.map((loc) => (
          <>
            <MapMarker
              key={`${loc.title}-${loc.latlng}`}
              position={loc.latlng}
              image={{
                src: DefaultMarkerUrl,
                size: { width: 24, height: 35 },
                options: {
                  offset: {
                    x: 16,
                    y: 67,
                  },
                },
              }}
              onClick={() => setSelectedLocation(loc)}
            />
            <CustomOverlayMap position={loc.latlng} yAnchor={1}>
              <MarkerInfo onClick={() => setSelectedLocation(loc)}>
                {loc.title}
              </MarkerInfo>
            </CustomOverlayMap>
          </>
        ))}
      </Map>

      {selectedLocation && (
        <div>
          <h2>{selectedLocation.title}에서 친구들이 기다리고 있어요.</h2>
          <PetContainer>
            {selectedLocation.pet ? (
              selectedLocation.pet.map((pet, index) => (
                <Card sx={{ width: '16rem' }} key={index}>
                  <CardMedia sx={{ height: 140 }} image={pet.profile} />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {pet.desertionNo}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <InfoDetail>분류: {pet.state} </InfoDetail>
                      <InfoDetail>이름: {pet.age}</InfoDetail>
                      <InfoDetail>성별: {pet.gender}</InfoDetail>
                      <InfoDetail>품종: {pet.kindCd}</InfoDetail>
                    </Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>No pets available</p>
            )}
          </PetContainer>
        </div>
      )}
    </ShelterContainer>
  );
}

export default ShelterList;
