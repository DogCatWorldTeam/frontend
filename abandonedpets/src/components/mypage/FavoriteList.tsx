import React, { useState } from 'react';
import styled from 'styled-components';
import Dog from '../../assets/sampleImg/Dog.png';
import FavoriteFill from '../../assets/Favorite_fill.svg';
import Button from '@mui/material/Button';

const styles = {
  main: {
    padding: '2rem',
  } as React.CSSProperties,
  section: {
    display: 'flex',
  } as React.CSSProperties,
  sidebar: {
    width: '25%',
    height: 'auto', // 높이를 자동으로 설정
    maxHeight: '625px', // 최대 높이를 설정하여 작게 조정
    backgroundColor: '#ffffff',
    padding: '1rem',
    marginRight: '2rem',
    border: '1px solid #d1d5db', // Add border
    borderRadius: '0.25rem', // Optional: to add rounded corners
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  } as React.CSSProperties,
  profileImage: {
    width: '6rem',
    height: '6rem',
    backgroundColor: '#d1d5db',
    borderRadius: '50%',
    margin: '0 auto 1rem auto',
  } as React.CSSProperties,
  textCenter: {
    textAlign: 'center',
  } as React.CSSProperties,
  textLarge: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
  } as React.CSSProperties,
  textSmall: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '2rem',
  } as React.CSSProperties,
  textGray: {
    color: '#6b7280',
  } as React.CSSProperties,
  buttonGroup: {
    marginTop: 'auto',
  } as React.CSSProperties,
  contentArea: {
    width: '75%',
  } as React.CSSProperties,
  contentBox: {
    backgroundColor: '#ffffff',
    padding: '1rem',
    marginBottom: '2rem',
    border: '1px solid #d1d5db', // Add border
    borderRadius: '0.25rem', // Optional: to add rounded corners
  } as React.CSSProperties,
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
  } as React.CSSProperties,
  title: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
  } as React.CSSProperties,
};

const PetData = {
  pets: [
    {
      name: '강아지1',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지2',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지3',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지4',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지5',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지6',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지7',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지8',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지9',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
    {
      name: '강아지10',
      age: '2살',
      gender: '남',
      weight: '6kg',
      img: Dog,
      fav: FavoriteFill,
    },
  ],
};

const UserData = {
  user: {
    name: 'test',
    email: 'test@example.com',
    phoneNum: '010-1234-5678',
  },
};

function FavoriteList() {
  const [currentPagePosts, setCurrentPagePosts] = useState(0);
  const [currentPageBookmarks, setCurrentPageBookmarks] = useState(0);
  const itemsPerPage = 3;

  const handlePrevPagePosts = () => {
    setCurrentPagePosts((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPagePosts = () => {
    setCurrentPagePosts((prev) => Math.min(prev + 1, Math.floor(PetData.pets.length / itemsPerPage)));
  };

  const handlePrevPageBookmarks = () => {
    setCurrentPageBookmarks((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPageBookmarks = () => {
    setCurrentPageBookmarks((prev) => Math.min(prev + 1, Math.floor(PetData.pets.length / itemsPerPage)));
  };

  const currentItemsPosts = PetData.pets.slice(
    currentPagePosts * itemsPerPage,
    (currentPagePosts + 1) * itemsPerPage
  );

  const currentItemsBookmarks = PetData.pets.slice(
    currentPageBookmarks * itemsPerPage,
    (currentPageBookmarks + 1) * itemsPerPage
  );

  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <div style={styles.sidebar}>
          <div>
            <div style={styles.profileImage} />
            <h3 style={{ ...styles.textCenter, ...styles.textLarge }}>{UserData.user.name}</h3>
            <p style={{ ...styles.textCenter, ...styles.textSmall }}>{UserData.user.email}</p>
            <p style={{ ...styles.textCenter, ...styles.textSmall }}>{UserData.user.phoneNum}</p>
          </div>
          <div style={styles.buttonGroup}>
            <div style={{ ...styles.textCenter, ...styles.textSmall, ...styles.textGray }}>
              <Button variant="outlined">회원정보수정</Button>
            </div>
            <div style={{ ...styles.textCenter, ...styles.textSmall, ...styles.textGray }}>
              <Button variant="outlined" color="error">회원탈퇴</Button>
            </div>
          </div>
        </div>

        <div style={styles.contentArea}>
          <div style={styles.contentBox}>
            <h3 style={styles.title}>내 작성 글</h3>
            <div style={styles.grid}>
              {currentItemsPosts.map((pet, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <img src={pet.img} alt={pet.name} style={{ width: '100px', height: '100px' }} />
                  <p>{pet.name}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <Button onClick={handlePrevPagePosts} disabled={currentPagePosts === 0}>이전</Button>
              <Button onClick={handleNextPagePosts} disabled={(currentPagePosts + 1) * itemsPerPage >= PetData.pets.length}>다음</Button>
            </div>
          </div>
          <div style={styles.contentBox}>
            <h3 style={styles.title}>북마크</h3>
            <div style={styles.grid}>
              {currentItemsBookmarks.map((pet, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <img src={pet.img} alt={pet.name} style={{ width: '100px', height: '100px' }} />
                  <p>{pet.name}</p>
                  <img src={pet.fav} alt="Favorite" style={{ width: '20px', height: '20px' }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <Button onClick={handlePrevPageBookmarks} disabled={currentPageBookmarks === 0}>이전</Button>
              <Button onClick={handleNextPageBookmarks} disabled={(currentPageBookmarks + 1) * itemsPerPage >= PetData.pets.length}>다음</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FavoriteList;
