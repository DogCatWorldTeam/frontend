import { useState } from 'react';
import styled from 'styled-components';
import PetsIcon from '@mui/icons-material/Pets';
import Cat from '../../assets/sampleImg/Cat.png';

const Wrapper = styled.div`
  width: 50%;
  margin: 3% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Title = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 900;
  display: flex;
  justify-content: center;
`;

const TitleStatus = styled.div<{ isAdoption: boolean }>`
  color: ${(props) => (props.isAdoption ? '#cccccc' : '#ffbe57')};
`;

const TitleText = styled.div`
  margin-left: 0.5rem;
`;

const ImgContainer = styled.div`
  width: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 0.45rem;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  width: 17rem;
  display: flex;
  justify-content: space-between;
`;

const InfoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PetDetailExplan = styled.span`
  font-size: 1.2rem;
  color: #a1a1a1;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const PetDetailText = styled.span`
  font-size: 1.2rem;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;
function Info() {
  const [isAdoption, setIsAdoption] = useState<boolean>(false); // 입양 완료 여부 확인

  return (
    <Wrapper>
      <Title>
        {isAdoption ? (
          <TitleStatus isAdoption={isAdoption}>[입양 완료]</TitleStatus>
        ) : (
          <TitleStatus isAdoption={isAdoption}>[입양 대기]</TitleStatus>
        )}
        <TitleText>중.소형 진도 믹스견 잘 키워 주실 분을 찾습니다</TitleText>
      </Title>
      <ImgContainer>
        <Img src={Cat} alt="강아지 사진" />
      </ImgContainer>

      <InfoContainer>
        <InfoDetailContainer>
          <PetDetailExplan>
            <PetsIcon fontSize="small" />
            이름
          </PetDetailExplan>
          <PetDetailExplan>
            <PetsIcon fontSize="small" />
            성별
          </PetDetailExplan>
          <PetDetailExplan>
            <PetsIcon fontSize="small" />
            나이
          </PetDetailExplan>
          <PetDetailExplan>
            <PetsIcon fontSize="small" />
            몸무게
          </PetDetailExplan>
          <PetDetailExplan>
            <PetsIcon fontSize="small" />
            품종
          </PetDetailExplan>
          <PetDetailExplan>
            <PetsIcon fontSize="small" />
            중성화 여부
          </PetDetailExplan>
          <PetDetailExplan>
            <PetsIcon fontSize="small" />
            주소
          </PetDetailExplan>
        </InfoDetailContainer>

        <InfoDetailContainer>
          <PetDetailText>딱콩</PetDetailText>
          <PetDetailText>여</PetDetailText>
          <PetDetailText>9개월</PetDetailText>
          <PetDetailText>4.8kg</PetDetailText>
          <PetDetailText>진도믹스</PetDetailText>
          <PetDetailText>네</PetDetailText>
          <PetDetailText>서울</PetDetailText>
        </InfoDetailContainer>
      </InfoContainer>
    </Wrapper>
  );
}

export default Info;
