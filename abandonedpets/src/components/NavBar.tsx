import styled from 'styled-components';
import Logo from '../assets/Logo.png';

const Wrapper = styled.div`
  width: 100%;
  height: 5.625rem;
  background-color: #F9F0E7;
  border-bottom: solid 1px #000000;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoImg = styled.img`
  height: 4.5rem;
  margin-top: 0.4rem;
  margin-left: 1.2rem;
  
  &:hover{
    cursor: pointer;
  }
`

const CategoryContainer = styled.ul`
`

const Category = styled.a`
  font-family: pretendard;
  font-size: 1.25rem;
  margin: 0 1.6rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const AuthContainer = styled.div``

const AuthItem = styled.a`
  font-size: 1rem;
  margin: 0 1.6rem;
`

function NavBar() {
  return (
    <Wrapper>
      <LogoImg src={Logo} alt="메인로고" />

      <CategoryContainer>
        <Category>입양/분양</Category>
        <Category>인근 보호소</Category>
        <Category>장례</Category>
      </CategoryContainer>

      <AuthContainer>
        <AuthItem>로그인</AuthItem>
        <AuthItem>회원가입</AuthItem>
      </AuthContainer>
    </Wrapper>
  )
}

export default NavBar;