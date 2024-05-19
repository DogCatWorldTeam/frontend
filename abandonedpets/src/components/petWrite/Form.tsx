import { useState, useRef } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  width: 100%;
  margin: 3rem auto 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const FromHeader = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

const LeftContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  width: 17rem;
  border: 1px solid #a9a9a9;
  margin-bottom: 0.25rem;
  border-radius: 6px;
`;

// 버튼 스타일 - 선택 여부에 따라 동적 스타일 적용
const StyledButton = styled.button<{ choice: boolean }>`
  width: 50%;
  height: 100%;
  border: none;
  border-radius: 5px;
  color: #000;
  background-color: ${({ choice }) => (choice ? '#FFEBD8' : '#fff')};
  transition: background-color 0.3s;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const ImgFile = styled.label`
  width: 17rem;
  height: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffc184;
  border-radius: 10px;

  &: hover {
    cursor: pointer;
  }
`;

const ImgFileExplan = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.875rem;
`;

const ImgPreview = styled.img`
  width: 90%;
  height: 90%;
  text-align: center;
  object-fit: contain;
`;

const InputFile = styled.input`
  display: none;
`;

const InfoContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
`;

const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: 20px;
`;

const PetDetailText = styled.span`
  font-size: 1.2rem;
`;

const InputInfo = styled.input`
  font-size: 1.2rem;
  outline: none;
  border: 1px solid #ffc184;
  border-radius: 5px;

  &: focus {
    outline: 1px solid #ffc184;
  }
`;

const InputBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const InputGenderBtn = styled.button<{ gender: boolean }>`
  width: 45%;
  border: none;
  border-radius: 5px;
  color: #000;
  background-color: ${({ gender }) => (gender ? '#FFEBD8' : '#A9A9A9')};
  transition: background-color 0.3s;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

const InputNeuterBtn = styled.button<{ neuter: boolean | string }>`
  width: 45%;
  border: none;
  border-radius: 5px;
  color: #000;
  background-color: ${({ neuter }) => (neuter ? '#FFEBD8' : '#A9A9A9')};
  transition: background-color 0.3s;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

const TextArea = styled.textarea`
  width: 60%;
  margin: 3% auto;
  background-color: #ffefde;
  border: none;
  border-radius: 10px;
  min-height: 7rem;
  resize: none;
  outline: #ffc184;
  padding: 15px;
  font-size: 1rem;

  &: focus {
    outline: 1px solid #ffc184;
  }
`;

const InputImgList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 5개의 동일한 크기의 열 생성 */
  grid-auto-flow: row; /* 요소가 너비를 초과하면 다음 행으로 넘어가도록 설정 */
  gap: 20px;
`;

const ImgPreviewList = styled.label`
  width: 15rem;
  height: 15rem;
  border: 1px solid #ffc184;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &: hover {
    cursor: pointer;
  }
`;

const SubmitBtn = styled.button`
  width: 20%;
  height: 2.5rem;
  font-size: 1.25rem;
  background-color: #ffc184;
  border: none;
  border-radius: 10px;

  &: hover {
    cursor: pointer;
  }
`;

function Form() {
  const [isSelected, setIsSelected] = useState<string | null>(null); // 입양 상태 버튼
  const [imgFile, setImgFile] = useState<string | null>(null); // 썸네일 미리보기
  const [imgList, setImgList] = useState<(string | undefined)[]>([]); // 이미지 리스트
  const [isGender, setIsGender] = useState<string | null>(null); // 성별 체크
  const [isNeuter, setIsNeuter] = useState<string | null>(null); // 중성화 체크

  const imgRef = useRef<HTMLInputElement>(null);

  const btnClickHandler = (choice: string) => {
    setIsSelected(choice);
  };

  const genderBtnHendler = (gender: string) => {
    setIsGender(gender);
  };

  const neuterBtnHandler = (neuter: string) => {
    setIsNeuter(neuter);
  };

  // 썸네일 미리보기
  const handleFileChange = () => {
    if (imgRef.current && imgRef.current.files) {
      const file: File | null = imgRef.current.files[0]; // 파일 가져오기
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file); // 파일 읽기
        reader.onloadend = () => {
          const result: string | null = reader.result as string; // 결과
          setImgFile(result); // 이미지 파일 설정
        };
      }
    }
  };

  // 이미지 리스트 미리보기
  const imgListHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgList((prevImgList) => {
          const newList = [...prevImgList];
          newList[index] = reader.result as string;
          return newList;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormWrapper>
      <FromHeader>
        <LeftContainer>
          <BtnContainer>
            <StyledButton
              type="button"
              choice={isSelected === 'yes'} // 선택된 버튼인지 확인하여 부울 값으로 전달
              onClick={() => btnClickHandler('yes')}
            >
              입양 대기
            </StyledButton>
            <StyledButton
              type="button"
              choice={isSelected === 'no'} // 선택된 버튼인지 확인
              onClick={() => btnClickHandler('no')}
            >
              입양 완료
            </StyledButton>
          </BtnContainer>

          <ImgFile htmlFor="petImg">
            {imgFile ? (
              <ImgPreview src={imgFile} alt="Preview" />
            ) : (
              <ImgFileExplan>여기를 클릭해서 사진을 올려주세요.</ImgFileExplan>
            )}
          </ImgFile>

          <InputFile
            type="file"
            id="petImg"
            onChange={handleFileChange}
            ref={imgRef}
          />
        </LeftContainer>

        <InfoContainer>
          <InfoDetail>
            <PetDetailText>제목</PetDetailText>
            <PetDetailText>이름</PetDetailText>
            <PetDetailText>성별</PetDetailText>
            <PetDetailText>나이</PetDetailText>
            <PetDetailText>몸무게</PetDetailText>
            <PetDetailText>품종</PetDetailText>
            <PetDetailText>중성화 여부</PetDetailText>
            <PetDetailText>주소</PetDetailText>
          </InfoDetail>

          <InfoDetail>
            <InputInfo placeholder="제목" />
            <InputInfo placeholder="이름" />
            <InputBtnContainer>
              <InputGenderBtn
                type="button"
                gender={isGender === 'male'}
                onClick={() => genderBtnHendler('male')}
              >
                남
              </InputGenderBtn>
              <InputGenderBtn
                type="button"
                gender={isGender === 'female'}
                onClick={() => genderBtnHendler('female')}
              >
                여
              </InputGenderBtn>
            </InputBtnContainer>
            <InputInfo type="text" placeholder="나이" />
            <InputInfo type="text" placeholder="몸무게" />
            <InputInfo type="text" placeholder="품종" />
            <InputBtnContainer>
              <InputNeuterBtn
                type="button"
                neuter={isNeuter === 'yes'}
                onClick={() => neuterBtnHandler('yes')}
              >
                네
              </InputNeuterBtn>
              <InputNeuterBtn
                type="button"
                neuter={isNeuter === 'no'}
                onClick={() => neuterBtnHandler('no')}
              >
                아니요
              </InputNeuterBtn>
            </InputBtnContainer>
            <InputInfo type="text" placeholder="주소" />
          </InfoDetail>
        </InfoContainer>
      </FromHeader>

      <TextArea placeholder="추가 설명을 작성해주세요. (예, 성격 또는 특이사항)" />

      <InputImgList>
        {[...Array(4)].map((_, index) => (
          <ImgPreviewList key={`listImg${index}`} htmlFor={`listImg${index}`}>
            {imgList[index] ? (
              <ImgPreview src={imgList[index]} alt="Preview" />
            ) : (
              <ImgFileExplan>여기를 클릭해서 사진을 올려주세요.</ImgFileExplan>
            )}
            <InputFile
              type="file"
              id={`listImg${index}`}
              onChange={(e) => imgListHandler(e, index)}
            />
          </ImgPreviewList>
        ))}
      </InputImgList>

      <SubmitBtn type="button">등록하기</SubmitBtn>
    </FormWrapper>
  );
}

export default Form;
