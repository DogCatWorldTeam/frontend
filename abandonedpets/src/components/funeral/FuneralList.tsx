import React, { useState } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from '@react-spring/web';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Funeral from '../../assets/sampleImg/Funeral.png';

// 스타일드 컴포넌트 정의
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
  background-color: #ffe3e3;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 1rem 0;
  background-color: #ffe3e3;
  text-align: center;
  font-size: 1rem;
`;

const AreaWrapper = styled.div`
  width: 80%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 2% 0;
`;

const StackWrapper = styled(Stack)`
  margin-top: 2rem;
`;

// 데이터 정의
const FuneralData = {
  funeral: [
    {
      name: '펫포유1',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '세종특별자치시 장군면 금암리',
      region: '세종',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유2',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '서울특별시 강남구',
      region: '서울',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유3',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '부산광역시 해운대구',
      region: '부산',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유4',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '인천광역시 연수구',
      region: '인천',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유5',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '경기도 수원시',
      region: '경기',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유6',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '강원도 춘천시',
      region: '강원',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유7',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '충청북도 청주시',
      region: '충청',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유8',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '전라남도 여수시',
      region: '전라',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유9',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '세종특별자치시 조치원읍',
      region: '세종',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유10',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '서울특별시 송파구',
      region: '서울',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유11',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '세종특별자치시 장군면 금암리',
      region: '세종',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유12',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '서울특별시 강남구',
      region: '서울',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유13',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '부산광역시 해운대구',
      region: '부산',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유14',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '인천광역시 연수구',
      region: '인천',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유15',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '경기도 수원시',
      region: '경기',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유16',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '강원도 춘천시',
      region: '강원',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유17',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '충청북도 청주시',
      region: '충청',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유18',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '전라남도 여수시',
      region: '전라',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유19',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '세종특별자치시 조치원읍',
      region: '세종',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
    {
      name: '펫포유20',
      img: Funeral,
      phoneNum: '1533-4426',
      address: '서울특별시 송파구',
      region: '서울',
      url: 'http://m.petforyou.kr/#__120305__item1',
    },
  ],
};

// 컴포넌트 정의
function FuneralList() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [filteredFunerals, setFilteredFunerals] = useState(FuneralData.funeral);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitions = useTransition(isTransitioning ? [] : filteredFunerals, {
    keys: (item) => item.name,
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
    config: { duration: 300 },
  });

  const handleButtonClick = (region: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedRegion(region === selectedRegion ? '' : region);
      const newFilteredFunerals =
        region === selectedRegion
          ? FuneralData.funeral
          : FuneralData.funeral.filter((item) => item.region === region);
      setFilteredFunerals(newFilteredFunerals);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <PageWrapper>
      <StackWrapper spacing={2} direction="row" justifyContent="center">
        {['서울', '부산', '인천', '경기', '세종', '강원', '충청', '전라'].map(
          (region) => (
            <Button
              key={region}
              variant={selectedRegion === region ? 'contained' : 'outlined'}
              onClick={() => handleButtonClick(region)}
            >
              {region}
            </Button>
          ),
        )}
      </StackWrapper>
      <AreaWrapper>
        <Grid container spacing={2}>
          {transitions((style, item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={item ? item.name : 'empty'}
            >
              <animated.div style={style}>
                {item ? (
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea
                      component="a"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.img}
                        alt="Funeral Image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.phoneNum}
                          <br />
                          {item.address}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ) : null}
              </animated.div>
            </Grid>
          ))}
        </Grid>
      </AreaWrapper>
    </PageWrapper>
  );
}

export default FuneralList;
