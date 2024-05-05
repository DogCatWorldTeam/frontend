import styled from "styled-components";
import Cencel from "../../assets/Cencel.png";
import Dog from "../../assets/sampleImg/Dog.png";
import FavoriteFill from "../../assets/Favorite_fill.svg";

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: rgba(0, 0, 0, 0.45);
`;

const Modal = styled.div`
  position: fixed;
  border: 1px solid #F6D9D9;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 60rem;
  height: 50rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InfoContainer = styled.div`
  width: 60rem;
  height: 4rem;
  background-color: #FBE8E8;
  text-align: center;
  line-height: 4rem;
  margin-bottom: 0.7rem;
  position: relative;
`

const Img = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);

  &:hover{
    cursor: pointer;
  }
`

const ListWrapper = styled.div`
  width: 95%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr); //3개의 열 
  gap: 20px;
  margin: 5% 0;
  overflow: auto;
`

const ListItem = styled.div`
  width: 14rem;
  height: 14rem;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PetImg = styled.img`
  width: 9rem;
  height: 9rem;
`

const PetInfo = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly
`

const InfoDetail = styled.p`
  font-size: 1rem;
`

const PetData = {
    pets: [
        { name: "강아지1", age: "2살", gender: "남", weight: "6kg", img: Dog, fav: FavoriteFill },
        { name: "강아지2", age: "2살", gender: "남", weight: "6kg", img: Dog, fav: FavoriteFill },
        { name: "강아지3", age: "2살", gender: "남", weight: "6kg", img: Dog, fav: FavoriteFill },
        { name: "강아지4", age: "2살", gender: "남", weight: "6kg", img: Dog, fav: FavoriteFill },
        { name: "강아지5", age: "2살", gender: "남", weight: "6kg", img: Dog, fav: FavoriteFill },
        { name: "강아지6", age: "2살", gender: "남", weight: "6kg", img: Dog, fav: FavoriteFill },
        { name: "강아지7", age: "2살", gender: "남", weight: "6kg", img: Dog, fav: FavoriteFill },
        { name: "강아지8", age: "2살", gender: "남", weight: "6kg", img: Dog, fav: FavoriteFill },
        { name: "강아지9", age: "2살", gender: "남", weight: "6kg", img: Dog, fav: FavoriteFill },
        { name: "강아지10", age: "2살", gender: "남", weight: "6kg", img: Dog, fav: FavoriteFill },
    ]
}

function FavoriteList() {
    return (
        <>
            <Backdrop />
            <Modal>
                <InfoContainer>
                    관심 목록
                    <Img src={Cencel} alt="닫기" />
                </InfoContainer>

                <ListWrapper>
                    {PetData.pets.map((pet) => (
                        <ListItem>
                            <PetImg src={pet.img} />
                            <PetInfo key={pet.name}>
                                <InfoDetail>{pet.name}</InfoDetail>
                                <InfoDetail>{pet.age}</InfoDetail>
                                <InfoDetail>{pet.gender}</InfoDetail>
                                <InfoDetail>{pet.weight}</InfoDetail>
                                <img src={pet.fav} />
                            </PetInfo>
                        </ListItem>
                    ))}
                </ListWrapper>
            </Modal>
        </>
    )
}

export default FavoriteList;