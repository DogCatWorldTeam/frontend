import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from '@react-spring/web';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, ImageList, ImageListItem } from '@mui/material';
import axios from 'axios';

// 스타일드 컴포넌트 정의
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
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

const CustomImageList = styled(ImageList)`
  :last-child {
    margin-bottom: 16px;
  }
`;

interface FuneralProps {
  id: number;
  funeralName: string;
  phoneNum: string;
  homepage: string;
  address: string;
  region: string;
  image: string;
}

// 컴포넌트 정의
function FuneralList() {
  axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

  const [selectedRegion, setSelectedRegion] = useState('');
  const [filteredFunerals, setFilteredFunerals] = useState<FuneralProps[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [data, setData] = useState<FuneralProps[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/v1/pet-funeral');
        setData(res.data); // assuming res.data is an array of funeral data
        setFilteredFunerals(res.data); // initialize with all data
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    })();
  }, []);

  const transitions = useTransition(isTransitioning ? [] : filteredFunerals, {
    keys: (item) => item.id,
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
          ? data
          : data.filter((item) => item.region === region);
      setFilteredFunerals(newFilteredFunerals);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <PageWrapper>
      <StackWrapper spacing={2} direction="row" justifyContent="center">
        {[
          '세종',
          '부산',
          '대구',
          '인천',
          '광주',
          '울산',
          '경기',
          '강원',
          '충청',
          '전라',
          '경상',
        ].map((region) => (
          <Button
            key={region}
            variant={selectedRegion === region ? 'contained' : 'outlined'}
            onClick={() => handleButtonClick(region)}
          >
            {region}
          </Button>
        ))}
      </StackWrapper>
      <AreaWrapper>
        <Grid container spacing={2}>
          <CustomImageList variant="masonry" cols={4}>
            {transitions((style, item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={item ? item.id : 'empty'}
              >
                <animated.div style={style}>
                  {item && (
                    <Card sx={{ minWidth: 280 }}>
                      <CardActionArea
                        component="a"
                        href={item.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* <CardMedia
                        component="img"
                        image={item.image}
                        alt="Funeral Image"
                        /> */}
                        <ImageListItem key={item.image}>
                          <img
                            src={item.image}
                            alt={item.funeralName}
                            loading="lazy"
                          />
                        </ImageListItem>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {item.funeralName}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              WebkitLineClamp: 2, // Adjust the number of lines you want to show
                            }}
                          >
                            {item.phoneNum}
                            <br />
                            {item.address}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  )}
                </animated.div>
              </Grid>
            ))}
          </CustomImageList>
        </Grid>
      </AreaWrapper>
    </PageWrapper>
  );
}

export default FuneralList;
