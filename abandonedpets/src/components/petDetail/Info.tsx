import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PetsIcon from '@mui/icons-material/Pets';
import DetailText from './DetailText';

const Wrapper = styled.div`
  width: 60%;
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
  display: flex;
  justify-content: space-between;
  gap: 15px;
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

interface ShelterInfo {
  name: string;
  coordinate: {
    latitude: number;
    longitude: number;
  } | null;
  careNm: string;
  careTel: string;
  careAddr: string;
}

interface PetDetail {
  id: number;
  desertionNo: number;
  filename: string;
  happenDt: string;
  happenPlace: string;
  petType: string;
  kindCd: string;
  colorCd: string;
  age: string;
  weight: string;
  noticeNo: string;
  noticeSdt: string;
  noticeEdt: string;
  popfile: string;
  processState: string;
  sexCd: string;
  neuterYn: string;
  specialMark: string;
  shelter: ShelterInfo;
  publicApi: boolean;
}

interface InfoProps {
  petInfo: PetDetail;
  petState: boolean;
}

const PetDetail: React.FC<InfoProps> = ({ petInfo, petState }) => {
  // console.log(petInfo);
  // console.log(petState);
  const petDetail = petInfo;
  const isAdoption = petState;

  // const { id } = useParams<{ id: string }>();
  // const [petDetail, setPetDetail] = useState<PetDetail | null>(null);
  // const [isAdoption, setIsAdoption] = useState<boolean>(false);

  // useEffect(() => {
  //   const fetchPetDetail = async () => {
  //     try {
  //       const response = await axios.get<PetDetail>(
  //         `http://localhost:8080/api/v1/petinfo/${id}`,
  //       );
  //       setPetDetail(response.data);
  //       setIsAdoption(response.data.processState === '입양 완료');
  //     } catch (error) {
  //       console.error('Error fetching pet details:', error);
  //     }
  //   };

  //   fetchPetDetail();
  // }, [id]);

  // if (!petDetail) {
  //   return <div>Loading...</div>;
  // }

  // console.log(petInfo.petInfo);
  // const petDetail = petInfo.petInfo;
  // // const isAdoption = petInfo.petInfo;
  // console.log(petState);
  // console.log(petDetail);
  // console.log(petInfo.petInfo);
  // console.log(isAdoption);
  // console.log(petState);

  return (
    <Wrapper>
      <Title>
        {isAdoption ? (
          <TitleStatus isAdoption={isAdoption}>[입양 완료]</TitleStatus>
        ) : (
          <TitleStatus isAdoption={isAdoption}>[입양 대기]</TitleStatus>
        )}
        <TitleText>{petDetail.kindCd} 잘 키워 주실 분을 찾습니다</TitleText>
      </Title>
      <ImgContainer>
        <Img src={petDetail.popfile} alt="강아지 사진" />
      </ImgContainer>

      <InfoContainer>
        <InfoDetailContainer>
          <PetDetailExplan>
            <PetsIcon fontSize="small" />
            유기번호
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
            색상
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
            발견장소
          </PetDetailExplan>
          <PetDetailExplan>
            <PetsIcon fontSize="small" />
            보호소 이름
          </PetDetailExplan>
          <PetDetailExplan>
            <PetsIcon fontSize="small" />
            보호소 장소
          </PetDetailExplan>
        </InfoDetailContainer>

        <InfoDetailContainer>
          <PetDetailText>{petDetail.desertionNo}</PetDetailText>
          <PetDetailText>{petDetail.sexCd}</PetDetailText>
          <PetDetailText>{petDetail.age}</PetDetailText>
          <PetDetailText>{petDetail.colorCd}</PetDetailText>
          <PetDetailText>{petDetail.weight}</PetDetailText>
          <PetDetailText>{petDetail.kindCd}</PetDetailText>
          <PetDetailText>
            {petDetail.neuterYn === 'Y' ? '예' : '아니오'}
          </PetDetailText>
          <PetDetailText>{petDetail.happenPlace}</PetDetailText>
          <PetDetailText>{petDetail.shelter.careNm}</PetDetailText>
          <PetDetailText>{petDetail.shelter.careAddr}</PetDetailText>
        </InfoDetailContainer>
      </InfoContainer>
      {petDetail.specialMark && (
        <DetailText specialMark={petDetail.specialMark} />
      )}
    </Wrapper>
  );
};

export default PetDetail;

// import { useState } from 'react';
// import styled from 'styled-components';
// import PetsIcon from '@mui/icons-material/Pets';
// import Cat from '../../assets/sampleImg/Cat.png';

// const Wrapper = styled.div`
//   width: 60%;
//   margin: 3% auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 30px;
// `;

// const Title = styled.div`
//   width: 100%;
//   font-size: 2rem;
//   font-weight: 900;
//   display: flex;
//   justify-content: center;
// `;

// const TitleStatus = styled.div<{ isAdoption: boolean }>`
//   color: ${(props) => (props.isAdoption ? '#cccccc' : '#ffbe57')};
// `;

// const TitleText = styled.div`
//   margin-left: 0.5rem;
// `;

// const ImgContainer = styled.div`
//   width: 45rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Img = styled.img`
//   width: 100%;
//   height: 100%;
//   margin-top: 0.45rem;
//   object-fit: contain;
// `;

// const InfoContainer = styled.div`
//   width: 17rem;
//   display: flex;
//   justify-content: space-between;
// `;

// const InfoDetailContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;

// const PetDetailExplan = styled.span`
//   font-size: 1.2rem;
//   color: #a1a1a1;
//   margin: 10px 0;
//   display: flex;
//   align-items: center;
// `;

// const PetDetailText = styled.span`
//   font-size: 1.2rem;
//   margin: 10px 0;
//   display: flex;
//   align-items: center;
// `;
// function Info() {
//   const [isAdoption, setIsAdoption] = useState<boolean>(false); // 입양 완료 여부 확인

//   return (
//     <Wrapper>
//       <Title>
//         {isAdoption ? (
//           <TitleStatus isAdoption={isAdoption}>[입양 완료]</TitleStatus>
//         ) : (
//           <TitleStatus isAdoption={isAdoption}>[입양 대기]</TitleStatus>
//         )}
//         <TitleText>중.소형 진도 믹스견 잘 키워 주실 분을 찾습니다</TitleText>
//       </Title>
//       <ImgContainer>
//         <Img src={Cat} alt="강아지 사진" />
//       </ImgContainer>

//       <InfoContainer>
//         <InfoDetailContainer>
//           <PetDetailExplan>
//             <PetsIcon fontSize="small" />
//             이름
//           </PetDetailExplan>
//           <PetDetailExplan>
//             <PetsIcon fontSize="small" />
//             성별
//           </PetDetailExplan>
//           <PetDetailExplan>
//             <PetsIcon fontSize="small" />
//             나이
//           </PetDetailExplan>
//           <PetDetailExplan>
//             <PetsIcon fontSize="small" />
//             몸무게
//           </PetDetailExplan>
//           <PetDetailExplan>
//             <PetsIcon fontSize="small" />
//             품종
//           </PetDetailExplan>
//           <PetDetailExplan>
//             <PetsIcon fontSize="small" />
//             중성화 여부
//           </PetDetailExplan>
//           <PetDetailExplan>
//             <PetsIcon fontSize="small" />
//             주소
//           </PetDetailExplan>
//         </InfoDetailContainer>

//         <InfoDetailContainer>
//           <PetDetailText>딱콩</PetDetailText>
//           <PetDetailText>여</PetDetailText>
//           <PetDetailText>9개월</PetDetailText>
//           <PetDetailText>4.8kg</PetDetailText>
//           <PetDetailText>진도믹스</PetDetailText>
//           <PetDetailText>네</PetDetailText>
//           <PetDetailText>서울</PetDetailText>
//         </InfoDetailContainer>
//       </InfoContainer>
//     </Wrapper>
//   );
// }

// export default Info;
