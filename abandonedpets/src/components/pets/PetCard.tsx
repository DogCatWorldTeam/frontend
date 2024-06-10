import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Favorite from '../../assets/Favorite.svg';
import FavoriteFill from '../../assets/Favorite_fill.svg';

const InfoDetail = styled.div`
  margin-bottom: 0;
`;

interface PetInfo {
  id: number;
  name: string;
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
  const [isFavorite, setIsFavorite] = useState<boolean>(
    pet.fav === FavoriteFill,
  );
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea onClick={() => navigate(`/detail/${pet.id}`)}>
        <CardMedia
          component="img"
          height="550"
          image={pet.img}
          alt={`${pet.name} 이미지`}
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
