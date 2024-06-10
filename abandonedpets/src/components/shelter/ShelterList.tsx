import { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CircularProgress,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';
import SelectPage from './SelectPage';

const ShelterContainer = styled.div`
  width: 60%;
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
  font-size: 0.875rem;
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

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface Shelter {
  name: string;
  coordinate: Coordinate;
}

interface Location {
  title: string;
  latlng: {
    lat: number;
    lng: number;
  };
  data?: {
    content: [
      {
        kindCd: string;
        filename: string;
        age: string;
        sexCd: string;
        processState: string;
        desertionNo: number;
      },
    ]; // 실제 데이터 타입에 맞게 수정 필요
    totalPages: number;
  };
}

function ShelterList() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  ); // 선택한 보호소 이름
  const [locationsInfo, setLocationsInfo] = useState<Location[]>([]); // 모든 보호소 이름, 위치 저장
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // 선택된 보호소의 index

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/shelter_address`)
      .then((res) => {
        const locationData: Location[] = res.data.map((shelter: Shelter) => ({
          title: shelter.name,
          latlng: {
            lng: shelter.coordinate.latitude,
            lat: shelter.coordinate.longitude,
          },
        }));
        setLocationsInfo(locationData);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(locationsInfo);
  if (loading) {
    return (
      <ShelterContainer>
        <CircularProgress />
      </ShelterContainer>
    );
  }

  const handleMarkerClick = (loc: Location) => {
    const index =
      locationsInfo.findIndex((item) => item.title === loc.title) + 1;
    setSelectedIndex(index); // index 상태 업데이트

    setCurrentPage(1);
    axios
      .get(`http://localhost:8080/api/v1/shelter/${index}?&page=0&size=12`)
      .then((response) => {
        setSelectedLocation({ ...loc, data: response.data });
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);

    if (selectedIndex) {
      axios
        .get(
          `http://localhost:8080/api/v1/shelter/${selectedIndex}?&page=${value - 1}&size=12`,
        )
        .then((response) => {
          setSelectedLocation((prev) =>
            prev ? { ...prev, data: response.data } : null,
          );
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  };

  return (
    <ShelterContainer>
      <ShelterInfo>가까운 보호소를 클릭해주세요.</ShelterInfo>
      <Map
        center={{ lat: 37.5528803113882, lng: 126.972601286522 }}
        style={{ width: '800px', height: '600px' }}
        level={7}
      >
        {locationsInfo.map((loc) => (
          <Fragment key={`${loc.title}-${loc.latlng.lat}-${loc.latlng.lng}`}>
            <MapMarker
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
              onClick={() => handleMarkerClick(loc)}
            />
            <CustomOverlayMap position={loc.latlng} yAnchor={1}>
              <MarkerInfo onClick={() => handleMarkerClick(loc)}>
                {loc.title}
              </MarkerInfo>
            </CustomOverlayMap>
          </Fragment>
        ))}
      </Map>

      {selectedLocation && (
        <div>
          <h2>{selectedLocation.title}에서 친구들이 기다리고 있어요.</h2>
          <PetContainer>
            {selectedLocation.data?.content ? (
              selectedLocation.data.content.map((pet, petIndex) => (
                <Card key={petIndex}>
                  <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image={pet.kindCd}
                    alt={`${pet.desertionNo} 이미지`}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      유기번호: {pet.desertionNo}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="div"
                    >
                      <InfoDetail>분류: {pet.processState}</InfoDetail>
                      <InfoDetail>나이: {pet.age}</InfoDetail>
                      <InfoDetail>성별: {pet.sexCd}</InfoDetail>
                      <InfoDetail>품종: {pet.filename}</InfoDetail>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button>
                      {pet.bookMark ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                  </CardActions>
                </Card>
              ))
            ) : (
              <p>No pets available</p>
            )}
          </PetContainer>
        </div>
      )}
      {selectedLocation ? (
        <SelectPage
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      ) : (
        ''
      )}
    </ShelterContainer>
  );
}

export default ShelterList;
