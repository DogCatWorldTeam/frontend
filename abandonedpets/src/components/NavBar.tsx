import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';

const Wrapper = styled.div`
  width: 100%;
  height: 5.625rem;
  background-color: #f9f0e7;
  border-bottom: solid 1px #b9b9b9;
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

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const DropDown = styled.button`
  font-family: pretendard;
  font-size: 1.25rem;
  margin: 0 1.6rem;
  text-decoration: none;
  color: inherit;
  position: relative;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const DropDownMenu = styled.ul`
  display: block;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  list-style: none;
  background-color: #fff;
  padding: 0.5rem;

  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
`;

const DropDownList = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: inherit;

  &: hover {
    background-color: #c9c9c9;
  }
`;

function NavBar() {
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <Wrapper>
      <Link to="/">
        <LogoImg src={Logo} alt="메인로고" />
      </Link>
      <CategoryContainer>
        <DropDown
          type="button"
          onMouseEnter={() => setIsDropDown(true)}
          onMouseLeave={() => setIsDropDown(false)}
        >
          입양/분양
          {isDropDown ? (
            <DropDownMenu>
              <DropDownList to="/dog">강아지</DropDownList>
              <DropDownList to="/cat">고양이</DropDownList>
            </DropDownMenu>
          ) : (
            ''
          )}
        </DropDown>
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
