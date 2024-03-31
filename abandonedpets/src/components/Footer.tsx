import styled from 'styled-components';
import Logo from '../assets/Logo.png';

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #F9F0E7;
  border-top: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: translateY(-100%);
`

const LogoImg = styled.img`
  height: 3.5rem;
`

const Explan = styled.p`
  margin: 0;
  font-size: 0.875rem;
`

function Footer() {
  return (
    <Wrapper>
      <LogoImg src={Logo} alt="메인로고" />
      <Explan>Team 미정</Explan>
    </Wrapper>
  )
}

export default Footer;