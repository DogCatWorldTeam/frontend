import styled from 'styled-components';
import Cencel from '../../assets/Cencel.png';

const InfoContainer = styled.div`
  width: 60rem;
  height: 4rem;
  background-color: #fbe8e8;
  text-align: center;
  line-height: 4rem;
  margin-bottom: 0.7rem;
  position: relative;
`;

const Img = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    cursor: pointer;
  }
`;

function InfoBar(props) {
  const { close } = props;

  return (
    <InfoContainer>
      <span>infobar 입니다</span>
      <Img onClick={close} src={Cencel} alt="닫기" />
    </InfoContainer>
  );
}

export default InfoBar;
