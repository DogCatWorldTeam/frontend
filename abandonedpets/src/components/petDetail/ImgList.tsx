import styled from 'styled-components';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import DogList1 from '../../assets/sampleImg/DogList1.png';
import DogList2 from '../../assets/sampleImg/DogList2.png';
import Cat from '../../assets/sampleImg/Cat.png';

const Wrapper = styled.div`
  width: 50%;
  margin: 3% auto;
`;

const DogList = {
  Dogs: [
    { img: DogList1 },
    { img: Cat },
    { img: DogList1 },
    { img: Cat },
    { img: DogList1 },
    { img: DogList2 },
    { img: DogList1 },
    { img: DogList2 },
  ],
};

interface PetDetail {
  imageUrls: string[] | null;
}

interface InfoProps {
  images: PetDetail;
}

function ImgList({ images }: InfoProps) {
  const imgList = images;

  return (
    <Wrapper>
      <ImageList variant="masonry" cols={3} gap={8}>
        {(imgList.imageUrls || []).map((img, idx) => (
          <ImageListItem key={idx}>
            <img src={img} alt="이미지" />
          </ImageListItem>
        ))}

        {/* {DogList.Dogs.map((dog, index) => (
          <ImageListItem key={index}>
            <img src={dog.img} />
          </ImageListItem>
        ))} */}
      </ImageList>
    </Wrapper>
  );
}

export default ImgList;
