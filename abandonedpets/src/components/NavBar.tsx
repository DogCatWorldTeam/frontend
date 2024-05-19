import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';

const Wrapper = styled.div`
  width: 100%;
  height: 5.625rem;
  background-color: #f9f0e7;
  border-bottom: solid 1px #000000;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 4.5rem;
  margin-top: 0.4rem;
  margin-left: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

const CategoryContainer = styled.ul``;

const Category = styled(Link)`
  font-family: pretendard;
  font-size: 1.25rem;
  margin: 0 1.6rem;
  text-decoration: none;
  color: inherit;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const AuthContainer = styled.div``;

const AuthItem = styled(Link)`
  font-size: 1rem;
  margin: 0 1.6rem;
  text-decoration: none;
  color: inherit;
`;

function NavBar() {
  return (
    <Wrapper>
      <Link to="/">
        <LogoImg src={Logo} alt="메인로고" />
      </Link>
      <CategoryContainer>
        <Category to="/pets">입양/분양</Category>
        <Category to="/shelter">인근 보호소</Category>
        <Category to="/funeral">장례식장</Category>
      </CategoryContainer>

      <AuthContainer>
        <AuthItem to="/login">로그인</AuthItem>
        <AuthItem to="/signup">회원가입</AuthItem>
      </AuthContainer>
    </Wrapper>
  );
}

export default NavBar;
