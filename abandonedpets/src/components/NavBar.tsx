import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import Logo from '../assets/Logo.png';
import Chat from '../components/modal/Chat';

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

const AuthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.6rem;
`;

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
  font-size: 1rem;

  &: hover {
    background-color: #c9c9c9;
  }
`;

const UserDropDownMenu = styled.ul`
  display: block;
  width: 5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, 0);
  list-style: none;
  background-color: #fff;
  padding: 0.5rem;

  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
`;

function NavBar() {
  const [isDropDown, setIsDropDown] = useState<boolean>(false); // navbar 드롭다운
  const [isUserDropDown, setIsUserDropDown] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true); // 로그인 여부 확인
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

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

      {isLogin ? (
        <AuthContainer>
          <IconButton
            sx={{ position: 'relative' }}
            onMouseEnter={() => setIsUserDropDown(true)}
            onMouseLeave={() => setIsUserDropDown(false)}
          >
            <PersonIcon fontSize="large" />
            {isUserDropDown ? (
              <UserDropDownMenu>
                <DropDownList to="/mypage">마이페이지</DropDownList>
                <DropDownList to="/">로그아웃</DropDownList>
              </UserDropDownMenu>
            ) : (
              ''
            )}
          </IconButton>
          <div>
            {isChatOpen && <Chat />}
            <Fab
              sx={{ position: 'fixed', bottom: 20, right: 22 }}
              color="primary"
              onClick={() => setIsChatOpen(!isChatOpen)}
            >
              {isChatOpen ? <CloseIcon /> : <ChatIcon />}
            </Fab>
          </div>
        </AuthContainer>
      ) : (
        <div>
          <AuthItem to="/login">로그인</AuthItem>
          <AuthItem to="/signup">회원가입</AuthItem>
        </div>
      )}
      {/* <AuthContainer>
        <AuthItem to="/login">로그인</AuthItem>
        <AuthItem to="/signup">회원가입</AuthItem>
        <ForumIcon />
        <PersonIcon fontSize="large" />
      </AuthContainer> */}
    </Wrapper>
  );
}

export default NavBar;
