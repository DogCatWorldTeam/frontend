import styled from 'styled-components';
import Shelter from '../../assets/sampleImg/Shelter.png';

const ShelterContainer = styled.div`
  width: 80%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr); //4개의 열
  gap: 30px;
  margin: 3% auto;
`;

const ShelterItem = styled.div`
  width: 100%;
  height: 19rem;
  background-color: #f9f0e7;
  border-radius: 20px;
  box-shadow: 0 4px 4px -4px gray; // 그림자
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShelterImg = styled.img`
  width: 23rem;
  height: 16rem;
`;

const ShelterInfo = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const sheltersData = {
  shelters: [
    { name: '보호소 1', img: Shelter },
    { name: '보호소 2', img: Shelter },
    { name: '보호소 3', img: Shelter },
    { name: '보호소 4', img: Shelter },
    { name: '보호소 5', img: Shelter },
    { name: '보호소 6', img: Shelter },
    { name: '보호소 7', img: Shelter },
    { name: '보호소 8', img: Shelter },
    { name: '보호소 9', img: Shelter },
    { name: '보호소 10', img: Shelter },
  ],
};

function ShelterList() {
  return (
    <ShelterContainer>
      {sheltersData.shelters.map((shelter, index) => (
        <ShelterItem key={index}>
          <ShelterImg src={shelter.img} />
          <ShelterInfo>{shelter.name}</ShelterInfo>
        </ShelterItem>
      ))}
    </ShelterContainer>
  );
}

export default ShelterList;
