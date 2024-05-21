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

const InfoDetail = styled.p`
  margin-bottom: 0;
`;

interface petData {
  pet: {
    name: string;
    age: string;
    gender: string;
    weight: string;
    img: string;
    fav: string;
  };
}

function PetCard({ pet }: petData) {
  const [isFavorite, setIsFavorite] = useState(pet.fav === FavoriteFill);
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ width: '20rem' }}>
      <CardActionArea onClick={() => navigate('/detail')}>
        <CardMedia
          component="img"
          height="160"
          image={pet.img}
          alt={`${pet.name} 이미지`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pet.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <InfoDetail>분류: 입양 대기 </InfoDetail>
            <InfoDetail>이름: </InfoDetail>
            <InfoDetail>나이: {pet.age}</InfoDetail>
            <InfoDetail>성별: {pet.gender}</InfoDetail>
            <InfoDetail>품종: </InfoDetail>
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
