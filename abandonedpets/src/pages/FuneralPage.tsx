import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Funeral from "../assets/sampleImg/Funeral.png";

const AreaWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 2% 0;
`

const AreaCategory = styled.div`
  width: 80%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
`

const AreaDetail = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AreaLocation = styled.p`
  font-size: 1.25rem;
`

const MoreButton = styled.button`
  width: 8rem;
  height: 2rem;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  

  &: hover{
    background-color: #D9D9D9;
  }
`

const FuneralKind = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-evenly;
`

const Img = styled.img`
  height: 8rem;
`

const FuneralName = styled.div`
  display: flex;
  justify-content: center;
`

function FuneralPage() {
    return (
        <>
            <NavBar />
            <AreaWrapper>
                <AreaCategory>
                    <AreaDetail>
                        <AreaLocation>경기</AreaLocation>
                        <MoreButton>자세히 보기</MoreButton>
                    </AreaDetail>
                    <FuneralKind>
                        <div>
                            <Img src={Funeral} alt='장례식 예시 사진' />
                            <FuneralName>펫포유</FuneralName>
                        </div>


                        <div>
                            <Img src={Funeral} alt='장례식 예시 사진' />
                            <FuneralName>파트라슈</FuneralName>
                        </div>

                        <div>
                            <Img src={Funeral} alt='장례식 예시 사진' />
                            <FuneralName>아이별</FuneralName>
                        </div>

                        <div>
                            <Img src={Funeral} alt='장례식 예시 사진' />
                            <FuneralName>대구러브</FuneralName>
                        </div>

                        <div>
                            <Img src={Funeral} alt='장례식 예시 사진' />
                            <FuneralName>펫포유</FuneralName>
                        </div>

                    </FuneralKind>
                </AreaCategory>

                <AreaCategory>
                    <AreaDetail>
                        <AreaLocation>서울</AreaLocation>
                        <MoreButton>자세히 보기</MoreButton>
                    </AreaDetail>
                    <FuneralKind>
                        <div>
                            <Img src={Funeral} alt='장례식 예시 사진' />
                            <FuneralName>펫포유</FuneralName>
                        </div>


                        <div>
                            <Img src={Funeral} alt='장례식 예시 사진' />
                            <FuneralName>펫포유</FuneralName>
                        </div>
                    </FuneralKind>
                </AreaCategory>

                <AreaCategory>
                    <AreaDetail>
                        <AreaLocation>인천</AreaLocation>
                        <MoreButton>자세히 보기</MoreButton>
                    </AreaDetail>
                    <FuneralKind>
                        <div>
                            <Img src={Funeral} alt='장례식 예시 사진' />
                            <FuneralName>펫포유</FuneralName>
                        </div>


                        <div>
                            <Img src={Funeral} alt='장례식 예시 사진' />
                            <FuneralName>펫포유</FuneralName>
                        </div>
                    </FuneralKind>
                </AreaCategory>


            </AreaWrapper>
            <Footer />
        </>
    )
}

export default FuneralPage;