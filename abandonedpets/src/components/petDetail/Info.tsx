import styled from 'styled-components';
import DogDetail from '../../assets/sampleImg/DogDetail.png';
import Favorite from '../../assets/Favorite.svg';

const Wrapper = styled.div`
  width: 70%;
  margin: 3% auto;
  display: flex;
  justify-content: center;
`;

const ImgContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PetState = styled.div`
  font-size: 1.5rem;
`;

const Img = styled.img`
  width: 17rem;
  height: 17rem;
  margin-top: 0.45rem;
`;

const LikeImg = styled.img`
  position: absolute;
  right: 17%;
  bottom: 3%;
`;

const InfoContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PetDetailText = styled.span`
  font-size: 1.2rem;
  margin: 10px 0;
`;
function Info() {
  return (
    <Wrapper>
      <ImgContainer>
        <PetState>입양 대기 / 입양 완료</PetState>
        <Img src={DogDetail} alt="강아지 사진" />
        <LikeImg src={Favorite} alt="즐겨찾기" />
      </ImgContainer>

      <InfoContainer>
        <InfoDetail>
          <PetDetailText>이름</PetDetailText>
          <PetDetailText>성별</PetDetailText>
          <PetDetailText>나이</PetDetailText>
          <PetDetailText>몸무게</PetDetailText>
          <PetDetailText>입양 공고일</PetDetailText>
          <PetDetailText>공고 출처</PetDetailText>
          <PetDetailText>입양 횟수</PetDetailText>
        </InfoDetail>

        <InfoDetail>
          <PetDetailText>강아지</PetDetailText>
          <PetDetailText>남/여</PetDetailText>
          <PetDetailText>9개월</PetDetailText>
          <PetDetailText>4.8kg</PetDetailText>
          <PetDetailText>2024.03.03</PetDetailText>
          <PetDetailText>~~~ 보호소</PetDetailText>
          <PetDetailText>1번</PetDetailText>
        </InfoDetail>
      </InfoContainer>
    </Wrapper>
  );
}

export default Info;
