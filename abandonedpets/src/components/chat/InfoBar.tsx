import styled from 'styled-components';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InfoText = styled.div`
  width: 16rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
`;

function InfoBar({ close }: any) {
  return (
    <InfoContainer>
      <Button
        sx={{
          position: 'absolute',
          left: 0,
        }}
        size="small"
        onClick={close}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </Button>
      <InfoText>중.소형 진도 믹스견 잘 키워 주실 분을 찾습니다</InfoText>
    </InfoContainer>
  );
}

export default InfoBar;
