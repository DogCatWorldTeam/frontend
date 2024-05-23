import { useState } from 'react';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function FavoriteBtn() {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <Button onClick={() => setIsFavorite(!isFavorite)} variant="outlined">
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </Button>
  );
}

export default FavoriteBtn;
