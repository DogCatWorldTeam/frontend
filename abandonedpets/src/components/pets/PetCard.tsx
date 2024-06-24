import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from 'axios';
import Favorite from '../../assets/Favorite.svg';
import FavoriteFill from '../../assets/Favorite_fill.svg';

const InfoDetail = styled.div`
  margin-bottom: 0;
`;

interface PetInfo {
  id: number;
  name: number | string;
  age: string;
  sexCd: string;
  weight: string;
  kindCd: string;
  img: string;
  fav: string;
}

interface PetCardProps {
  pet: PetInfo;
}

function PetCard({ pet }: PetCardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const navigate = useNavigate();
  const userId = Number(localStorage.getItem('userId'));

  const handleFavoriteClick = async () => {
    await setIsFavorite(!isFavorite);
    console.log(isFavorite);
    if (!isFavorite) {
      axios
        .post(`http://localhost:8080/api/v1/bookmark`, {
          userId,
          petBoardId: pet.id,
        })
        .then((res) => console.log(res));
    } else {
      axios.delete(`http://localhost:8080/api/v1/bookmark/${userId}`, {
        data: {
          userId,
          petBoardId: pet.id,
        },
      });
    }
  };

  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea onClick={() => navigate(`/detail/${pet.id}`)}>
        <CardMedia
          component="img"
          height="550"
          image={pet.img}
          alt={`${pet.img}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            유기번호: {pet.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <InfoDetail>분류: 입양 대기</InfoDetail>
            <InfoDetail>나이: {pet.age}</InfoDetail>
            <InfoDetail>무게: {pet.weight}</InfoDetail>
            <InfoDetail>성별: {pet.sexCd}</InfoDetail>
            <InfoDetail>품종: {pet.kindCd}</InfoDetail>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleFavoriteClick}>
          <img src={isFavorite ? FavoriteFill : Favorite} alt="Favorite icon" />
        </Button>
      </CardActions>
    </Card>
  );
}

export default PetCard;
