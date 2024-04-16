import styled from 'styled-components';
import Funeral from '../../assets/sampleImg/Funeral.png';

const AreaWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 2% 0;
`;

const AreaCategory = styled.div`
  width: 80%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
`;

const AreaDetail = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AreaLocation = styled.p`
  font-size: 1.25rem;
`;

const MoreButton = styled.button`
  width: 8rem;
  height: 2rem;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;

  &: hover {
    background-color: #d9d9d9;
  }
`;

const FuneralKind = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-evenly;
`;

const Img = styled.img`
  height: 8rem;
`;

const FuneralName = styled.div`
  display: flex;
  justify-content: center;
`;

const FuneralData = {
  funeral: [
    { name: '장례식장 1', img: Funeral },
    { name: '장례식장 2', img: Funeral },
    { name: '장례식장 3', img: Funeral },
    { name: '장례식장 4', img: Funeral },
  ],
};

function FuneralList() {
  return (
    <AreaWrapper>
      <AreaCategory>
        <AreaDetail>
          <AreaLocation>경기</AreaLocation>
          <MoreButton>자세히 보기</MoreButton>
        </AreaDetail>

        <FuneralKind>
          {FuneralData.funeral.map((funeral, index) => (
            <div key={index}>
              <Img src={funeral.img} alt="예시 사진" />
              <FuneralName>{funeral.name}</FuneralName>
            </div>
          ))}
        </FuneralKind>
      </AreaCategory>

      <AreaCategory>
        <AreaDetail>
          <AreaLocation>서울</AreaLocation>
          <MoreButton>자세히 보기</MoreButton>
        </AreaDetail>
        <FuneralKind>
          {FuneralData.funeral.map((funeral, index) => (
            <div key={index}>
              <Img src={funeral.img} alt="예시 사진" />
              <FuneralName>{funeral.name}</FuneralName>
            </div>
          ))}
        </FuneralKind>
      </AreaCategory>

      <AreaCategory>
        <AreaDetail>
          <AreaLocation>인천</AreaLocation>
          <MoreButton>자세히 보기</MoreButton>
        </AreaDetail>
        <FuneralKind>
          {FuneralData.funeral.map((funeral, index) => (
            <div key={index}>
              <Img src={funeral.img} alt="예시 사진" />
              <FuneralName>{funeral.name}</FuneralName>
            </div>
          ))}
        </FuneralKind>
      </AreaCategory>
    </AreaWrapper>
  );
}

export default FuneralList;
