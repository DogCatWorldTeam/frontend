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
import Cat from '../../assets/sampleImg/Cat.png';

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

interface Pet {
  profile: string;
  desertionNo: string;
  state: string;
  age: string;
  gender: string;
  kindCd: string;
  bookMark: boolean;
}

interface Location {
  title: string;
  latlng: { lat: number; lng: number };
  pet?: Pet[];
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface Shelter {
  name: string;
  coordinate: Coordinate;
  careNm?: string;
  careTel?: string;
  careAddr?: string;
  // 다른 필요한 필드들 추가
}

function ShelterList() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );
  const [locationsInfo, setLocationsInfo] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <ShelterContainer>
        <CircularProgress />
      </ShelterContainer>
    );
  }

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
              onClick={() => setSelectedLocation(loc)}
            />
            <CustomOverlayMap position={loc.latlng} yAnchor={1}>
              <MarkerInfo onClick={() => setSelectedLocation(loc)}>
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
            {selectedLocation.pet ? (
              selectedLocation.pet.map((pet, petIndex) => (
                <>
                  <Card sx={{ width: '16rem' }} key={petIndex}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={pet.profile && Cat}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {pet.desertionNo}
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        <InfoDetail>분류: {pet.state}</InfoDetail>
                        <InfoDetail>이름: {pet.age}</InfoDetail>
                        <InfoDetail>성별: {pet.gender}</InfoDetail>
                        <InfoDetail>품종: {pet.kindCd}</InfoDetail>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button>
                        {pet.bookMark ? (
                          <FavoriteIcon />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </Button>
                    </CardActions>
                  </Card>
                </>
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
