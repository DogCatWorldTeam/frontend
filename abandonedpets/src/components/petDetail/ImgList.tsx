import styled from "styled-components";
import DogList1 from "../../assets/sampleImg/DogList1.png";
import DogList2 from "../../assets/sampleImg/DogList2.png";

const Wrapper = styled.div`
  width: 60%;
  margin: 3% auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 5개의 동일한 크기의 열 생성 */
  grid-auto-flow: row; /* 요소가 너비를 초과하면 다음 행으로 넘어가도록 설정 */
  gap: 20px;
`

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: scale-down;
`

const DogList = {
    Dogs: [
        { img: DogList1 },
        { img: DogList2 },
        { img: DogList1 },
        { img: DogList2 },
        { img: DogList1 },
        { img: DogList2 },
        { img: DogList1 },
        { img: DogList2 },
    ]
}

function ImgList() {
    return (
        <Wrapper>
            {DogList.Dogs.map((dog, index) => (
                <Img src={dog.img} key={index} />
            ))}
        </Wrapper>
    )
}

export default ImgList;