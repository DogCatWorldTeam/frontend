import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Dog from '../../assets/sampleImg/Dog.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { logoutHandler } from '../NavBar.tsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Main = styled.main`
  padding: 1rem; /* Padding reduced */
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  height: 100vh; /* Full viewport height */
  background-color: #ffffff;
  padding: 1rem;
  margin-bottom: 1rem; /* Margin reduced */
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 25%;
    margin-right: 1rem; /* Margin reduced */
    margin-bottom: 0;
    height: 100vh; /* Full viewport height for larger screens */
  }
`;

const ProfileImage = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #d1d5db;
  border-radius: 50%;
  margin: 0 auto 1rem auto;
`;

const TextCenter = styled.div`
  text-align: center;
`;

const TextLarge = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const TextSmall = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem; /* Margin reduced */
  text-align: center;
`;

const ButtonGroup = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Gap reduced */
  align-items: center;
  margin-bottom: 10px; /* Margin reduced */
`;

const ContentArea = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 75%;
  }
`;

const ContentBox = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  margin-bottom: 1rem; /* Margin reduced */
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5rem; /* Gap reduced */

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem; /* Margin reduced */
`;

interface BookmarkProps {
  id: number;
  petBoard: {
    title: string;
    popfile: string;
  };
}

interface UserProps {
  id: number;
  username: string;
  email: string;
  phoneNum: string;
}

interface MypetBoardProps {
  petBoardId: number;
  title: string;
  petInfo: {
    popfile: string;
  } | null;
}

function FavoriteList() {
  const [currentPagePosts, setCurrentPagePosts] = useState(0);
  const [currentPageBookmarks, setCurrentPageBookmarks] = useState(0);
  const [bookmarks, setBookmarks] = useState<BookmarkProps[]>([]);
  const [myPetBoard, setmypetBoard] = useState<MypetBoardProps[]>([]);
  const [user, setUser] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserProps | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedUserInfo, setEditedUserInfo] = useState<UserProps | null>(null);
  const navigate = useNavigate();
  const itemsPerPage = 3;

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUser(userId);
    if (!userId) {
      console.error('No user ID found in local storage');
      return;
    }

    // 유저 정보 가져오기
    (async () => {
      try {
        const userRes = await axios.get(`http://localhost:8080/api/v1/users/${userId}`);
        if (userRes.data.status === 'OK') {
          setUserInfo(userRes.data.result);
          setEditedUserInfo(userRes.data.result);
        }
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    })();

    // 북마크 정보 가져오기
    (async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/v1/bookmark/${userId}`);

        if (res.data.status === 'OK') {
          setBookmarks(res.data.result);
        }
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    })();

    // 게시글 정보 가져오기
    (async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/v1/pet_board/myPetBoard/${userId}`);
        setmypetBoard(res.data);

      } catch (error) {
        console.error('Failed to fetch posts', error);
      }
    })();
  }, []);

  const handlePrevPagePosts = () => {
    setCurrentPagePosts((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPagePosts = () => {
    setCurrentPagePosts((prev) => Math.min(prev + 1, Math.floor(myPetBoard.length / itemsPerPage)));
  };

  const handlePrevPageBookmarks = () => {
    setCurrentPageBookmarks((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPageBookmarks = () => {
    setCurrentPageBookmarks((prev) => Math.min(prev + 1, Math.floor(bookmarks.length / itemsPerPage)));
  };

  const currentItemsPosts = myPetBoard.slice(
    currentPagePosts * itemsPerPage,
    (currentPagePosts + 1) * itemsPerPage
  );

  const currentItemsBookmarks = bookmarks.slice(
    currentPageBookmarks * itemsPerPage,
    (currentPageBookmarks + 1) * itemsPerPage
  );

  const handleEditProfile = async () => {
    if (isEditing) {
      if (!user) return;

      try {
        const res = await axios.put(`http://localhost:8080/api/v1/users/${user}`, editedUserInfo);
        if (res.data.status === 'OK') {
          alert('회원 정보가 수정되었습니다.');
          setUserInfo(editedUserInfo);
        }
      } catch (error) {
        console.error('Failed to edit profile', error);
      }
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUserInfo((prev) => prev ? { ...prev, [name]: value } : null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedUserInfo(userInfo);
  };

  const handleDeleteAccount = async () => {
    if (!user) return;

    try {
      const res = await axios.delete(`http://localhost:8080/api/v1/users/${user}`);
      if (res.data.status === 'OK') {
        alert('회원 탈퇴가 완료되었습니다.');
        logoutHandler(); // 로그아웃 처리
        navigate('/'); // 메인 홈으로 이동
      }
    } catch (error) {
      console.error('Failed to delete account', error);
    }
  };

  const handleCardClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Main>
      <Section>
        <Sidebar>
          <div>
            <ProfileImage />
            {userInfo && (
              <>
                {isEditing ? (
                  <>
                    <TextField
                      label="이름"
                      name="username"
                      value={editedUserInfo?.username}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="이메일"
                      name="email"
                      value={editedUserInfo?.email}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="전화번호"
                      name="phoneNum"
                      value={editedUserInfo?.phoneNum}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                                   </>
                ) : (
                  <>
                    <TextLarge>{userInfo.username}</TextLarge>
                    <TextSmall>{userInfo.email}</TextSmall>
                    <TextSmall>{userInfo.phoneNum}</TextSmall>
                  </>
                )}
              </>
            )}
          </div>

          <ButtonGroup>
            {isEditing ? (
              <>
                <Button variant="outlined" onClick={handleEditProfile}>저장</Button>
                <Button variant="outlined" color="error" onClick={handleCancelEdit}>취소</Button>
              </>
            ) : (
              <>
                <Button variant="outlined" onClick={handleEditProfile}>회원정보수정</Button>
                <Button variant="outlined" color="error" onClick={handleDeleteAccount}>회원탈퇴</Button>
              </>
            )}
          </ButtonGroup>
        </Sidebar>
        <ContentArea>
          <ContentBox>
            <Title>내 작성 글</Title>
            <Grid>
              {currentItemsPosts.length > 0 ? (
                currentItemsPosts.map((post, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <Card sx={{ maxWidth: 250 }} onClick={() => handleCardClick(post.petBoardId)}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={post.petInfo ? post.petInfo.popfile : Dog}
                          alt={post.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {post.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: 'center' }}>작성한 글이 없습니다.</p>
              )}
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <Button onClick={handlePrevPagePosts} disabled={currentPagePosts === 0}>이전</Button>
              <Button onClick={handleNextPagePosts} disabled={(currentPagePosts + 1) * itemsPerPage >= myPetBoard.length}>다음</Button>
            </div>
          </ContentBox>
          <ContentBox>
            <Title>북마크</Title>
            <Grid>
              {currentItemsBookmarks.length > 0 ? (
                currentItemsBookmarks.map((bookmark, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <Card sx={{ maxWidth: 250 }} onClick={() => handleCardClick(bookmark.id)}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={bookmark.petBoard.popfile}
                          alt={bookmark.petBoard.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {bookmark.petBoard.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: 'center' }}>북마크한 글이 없습니다.</p>
              )}
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <Button onClick={handlePrevPageBookmarks} disabled={currentPageBookmarks === 0}>이전</Button>
              <Button onClick={handleNextPageBookmarks} disabled={(currentPageBookmarks + 1) * itemsPerPage >= bookmarks.length}>다음</Button>
            </div>
          </ContentBox>
        </ContentArea>
      </Section>
    </Main>
  );
}

export default FavoriteList;