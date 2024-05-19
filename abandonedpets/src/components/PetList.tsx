import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Dog from '../assets/sampleImg/Dog.png';
import Favorite from '../assets/Favorite.svg';
import FavoriteFill from '../assets/Favorite_fill.svg';

const PetContainer = styled.div`
  width: 85%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr); //4개의 열
  gap: 20px;
  margin: 3% auto;
`;

const PetItem = styled.div`
  width: 18rem;
  height: 18rem;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const PetImg = styled.img`
  width: 13rem;
  height: 13rem;
`;

const PetInfo = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
`;

const InfoDetail = styled.p`
  font-size: 1rem;
`;

const PetData = {
  pets: [
    {
      name: '강아지1',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: Favorite,
    },
    {
      name: '강아지2',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: Favorite,
    },
    {
      name: '강아지3',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지4',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지5',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지6',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: Favorite,
    },
    {
      name: '강아지7',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지8',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: Favorite,
    },
    {
      name: '강아지9',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: Favorite,
    },
    {
      name: '강아지10',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
  ],
};

function PetList() {
  const navigate = useNavigate();

  return (
    <PetContainer>
      {PetData.pets.map((pet) => (
        <PetItem onClick={() => navigate('/detail')}>
          <PetImg src={pet.img} />
          <PetInfo key={pet.name}>
            <InfoDetail>{pet.name}</InfoDetail>
            <InfoDetail>{pet.age}</InfoDetail>
            <InfoDetail>{pet.gender}</InfoDetail>
            <InfoDetail>{pet.weight}</InfoDetail>
            <img src={pet.fav} />
          </PetInfo>
        </PetItem>
      ))}

      <PetItem>
        <PetImg src={Dog} alt="강아지 예시 이미지" />
        <PetInfo>
          <InfoDetail>이름</InfoDetail>
          <InfoDetail>나이</InfoDetail>
          <InfoDetail>성별</InfoDetail>
          <InfoDetail>몸무게</InfoDetail>
          <img src={Favorite} />
        </PetInfo>
      </PetItem>
    </PetContainer>
  );
}

export default PetList;
