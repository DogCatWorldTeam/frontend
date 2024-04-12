import { useState } from "react";
import styled from "styled-components";
import FilterIcon from "../assets/Filter.png";
import SearchIcon from "../assets/Search.png";

const SearchWrapper = styled.div`
  width: 85%;
  margin: 3% auto;
`

const SearchContainer = styled.div`
  width: 100%;
  height: 2.7rem;
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #000;
`

const FilterImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  left: 0;

  &: hover{
    cursor: pointer;
  }
`

const SearchImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 3rem;

  &: hover{
    cursor: pointer;
  }
`

const Input = styled.input`
  width: 50%;
  border: none;
  outline: none;
  font-size: 1.25rem;
  margin-left: 0.5rem;
`

const FilterForm = styled.form`
  width: 95%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 1% auto;
`

const FormItems = styled.div`
  display: flex;
`

const FormInfo = styled.div`
  font-size: 1.25rem;
  margin-right: 0.3rem;
`

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Label = styled.label`
  font-size: 1rem;
  margin-top: 0.13rem;
`

function Search() {
  const [isOpen, setIsOpen] = useState(false);

  const FilterOpenHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <SearchWrapper>
      <SearchContainer>
        <FilterImg src={FilterIcon} alt='필터' onClick={FilterOpenHandler} />
        <InputContainer>
          <SearchImg src={SearchIcon} alt='검색' />
          <Input type='text' placeholder="검색할 내용을 입력해주세요" />
        </InputContainer>
      </SearchContainer>

      {isOpen && (
        <FilterForm>
          <FormItems>
            <FormInfo>크기</FormInfo>
            <CheckBoxContainer>
              <Label><input type='checkbox' name='size' value='s' />소형종</Label>
              <Label><input type='checkbox' name='size' value='m' />중형종</Label>
              <Label><input type='checkbox' name='size' value='l' />대형종</Label>
            </CheckBoxContainer>
          </FormItems>
          <FormItems>
            <FormInfo>성별</FormInfo>
            <CheckBoxContainer>
              <Label><input type='checkbox' name="gender" value="male" /> 수컷 </Label>
              <Label><input type='checkbox' name="gender" value="female" /> 암컷 </Label>
            </CheckBoxContainer>
          </FormItems>

          <FormItems>
            <FormInfo>나이</FormInfo>
            <input type='text' placeholder="나이 입력" />
          </FormItems>

          <FormItems>
            <FormInfo>중성화 여부</FormInfo>
            <CheckBoxContainer>
              <Label><input type='checkbox' name='done' />완료 </Label>
              <Label><input type='checkbox' name='not done' />미완료 </Label>
            </CheckBoxContainer>
          </FormItems>

          <FormItems>
            <FormInfo>품종</FormInfo>
            <input type='text' placeholder='품종 입력' />
          </FormItems>
        </FilterForm>
      )}
    </SearchWrapper>
  )
}

export default Search;