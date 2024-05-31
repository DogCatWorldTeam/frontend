import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '../../assets/Search.png';
import FilterIcon from '../../assets/Filter.png';

const SearchWrapper = styled.div`
  width: 85%;
  margin: 3% auto;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 2.7rem;
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #000;
`;

const FilterImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  left: 0;

  &: hover {
    cursor: pointer;
  }
`;

const SearchImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  &: hover {
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 3rem;
`;

const WriteBtn = styled.span`
  width: 10rem;
`;

const Input = styled.input`
  width: 50%;
  border: none;
  outline: none;
  font-size: 1.25rem;
  margin-left: 0.5rem;
`;

const FilterForm = styled.form`
  width: 95%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1% auto;
`;

const FormItems = styled.div`
  display: flex;
  align-items: center;
`;

const FormInfo = styled.div`
  font-size: 1.25rem;
  margin-right: 0.3rem;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-top: 0.13rem;
`;

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

function Search() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAdoption, setIsAdoption] = useState<string>('');

  const FilterOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const SelectAdoptionHandler = (e: SelectChangeEvent) => {
    setIsAdoption(e.target.value);
  };

  return (
    <SearchWrapper>
      <SearchContainer>
        <FilterImg src={FilterIcon} alt="필터" onClick={FilterOpenHandler} />
        <InputContainer>
          <SearchImg src={SearchIcon} alt="검색" />
          <Input type="text" placeholder="검색할 내용을 입력해주세요" />
        </InputContainer>
        <Button
          variant="outlined"
          color="warning"
          onClick={() => navigate('/petwrite')}
        >
          <WriteBtn>글 작성하기</WriteBtn>
        </Button>
      </SearchContainer>

      {isOpen && (
        <FilterForm>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="state">입양 상태</InputLabel>
            <Select
              id="state"
              value={isAdoption}
              onChange={SelectAdoptionHandler}
            >
              <MenuItem value="all">전체</MenuItem>
              <MenuItem value="wait">입양 대기</MenuItem>
              <MenuItem value="complete ">입양 완료</MenuItem>
            </Select>
          </FormControl>

          <FormItems>
            <FormInfo>나이</FormInfo>
            <TextField variant="outlined" placeholder="0" />
            <span>~</span>
            <TextField variant="outlined" placeholder="" />
          </FormItems>

          <FormItems>
            <FormInfo>품종</FormInfo>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="전체" />}
            />
          </FormItems>
        </FilterForm>
      )}
    </SearchWrapper>
  );
}

export default Search;
