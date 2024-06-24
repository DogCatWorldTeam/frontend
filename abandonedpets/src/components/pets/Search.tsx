// components/pets/Search.tsx
import React, { useState } from 'react';
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
import axios from 'axios';

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
  width: 2.5em;
  height: 2.5em;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0%, -50%);
  &:hover {
    cursor: pointer;
  }
`;

const SearchImg = styled.img`
  width: 1.5em;
  height: 1.5em;
  &:hover {
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
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.25em;
  margin-left: 0.5rem;
`;

const FilterForm = styled.form`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1% auto;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`;

const FormItems = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const FormInfo = styled.div`
  font-size: 1.25em;
  margin-right: 0.3rem;
`;

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'Mix dog', year: 1900 },
];

interface SearchProps {
  onSearch: (searchResults: any[], totalPages: number) => void;
}

function Search({ onSearch }: SearchProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAdoption, setIsAdoption] = useState<string>('');
  const [minYear, setMinYear] = useState<string>('');
  const [maxYear, setMaxYear] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isYoung, setIsYoung] = useState<boolean | null>(null); // 기본값 null로 설정

  const FilterOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const SelectAdoptionHandler = (e: SelectChangeEvent) => {
    setIsAdoption(e.target.value);
  };

  const SelectIsYoungHandler = (e: SelectChangeEvent) => {
    const value = e.target.value;
    setIsYoung(value === 'true' ? true : value === 'false' ? false : null);
  };

  const writeBtnClickHandler = () => {
    // Navigate logic remains the same
  };

  const searchHandler = async () => {
    const filterRequest: any = {
      status: isAdoption,
      minYear: minYear || null,
      maxYear: maxYear || null,
      title: title || null,
    };

    if (selectedCategory !== null) {
      filterRequest.categories = selectedCategory;
    }

    if (isYoung !== null) {
      filterRequest.isYoung = isYoung;
    }

    try {
      const response = await axios.get('http://localhost:8080/api/v1/pet_board/search', {
        params: {
          ...filterRequest,
          page: 0,
          size: 10,
        },
      });

      if (response.data && response.data.content) {
        onSearch(response.data.content, response.data.totalPages);
      } else {
        onSearch([], 0);
      }
    } catch (error) {
      console.error('검색 중 오류가 발생했습니다.', error);
      onSearch([], 0);
    }
  };

  return (
    <SearchWrapper>
      <SearchContainer>
        <FilterImg src={FilterIcon} alt="필터" onClick={FilterOpenHandler} />
        <InputContainer>
          <SearchImg src={SearchIcon} alt="검색" onClick={searchHandler} />
          <Input type="text" placeholder="검색할 내용을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />
        </InputContainer>
        <Button variant="outlined" color="warning" onClick={writeBtnClickHandler}>
          <WriteBtn>글 작성하기</WriteBtn>
        </Button>
      </SearchContainer>

      {isOpen && (
        <FilterForm>
          <FormControl sx={{ minWidth: 140 }}>
            <InputLabel id="state">입양 상태</InputLabel>
            <Select id="state" value={isAdoption} onChange={SelectAdoptionHandler}>
              <MenuItem value="Awaiting_adoption">입양 대기</MenuItem>
              <MenuItem value="Adoption_complete">입양 완료</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 140 }}>
            <InputLabel id="isYoung">젊은 동물</InputLabel>
            <Select id="isYoung" value={isYoung === null ? '' : isYoung.toString()} onChange={SelectIsYoungHandler}>
              <MenuItem value="">선택 안 함</MenuItem>
              <MenuItem value="true">예</MenuItem>
              <MenuItem value="false">아니요</MenuItem>
            </Select>
          </FormControl>

          <FormItems>
            <FormInfo>나이</FormInfo>
            <TextField
              variant="outlined"
              placeholder="최소"
              value={minYear}
              onChange={(e) => setMinYear(e.target.value)}
              sx={{ width: 100 }}
            />
            <span>~</span>
            <TextField
              variant="outlined"
              placeholder="최대"
              value={maxYear}
              onChange={(e) => setMaxYear(e.target.value)}
              sx={{ width: 100 }}
            />
          </FormItems>

          <FormItems>
            <FormInfo>품종</FormInfo>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              onChange={(event, value) => setSelectedCategory(value ? value.label : null)}
              renderInput={(params) => <TextField {...params} label="전체" />}
            />
          </FormItems>

          <Button variant="outlined" color="primary" onClick={searchHandler}>
            <WriteBtn>검색</WriteBtn>
          </Button>
        </FilterForm>
      )}
    </SearchWrapper>
  );
}

export default Search;













// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import SearchIcon from '../../assets/Search.png';
// import FilterIcon from '../../assets/Filter.png';
// import axios from 'axios';

// const SearchWrapper = styled.div`
//   width: 85%;
//   margin: 3% auto;
// `;

// const SearchContainer = styled.div`
//   width: 100%;
//   height: 2.7rem;
//   display: flex;
//   justify-content: center;
//   position: relative;
//   border-bottom: 1px solid #000;
// `;

// const FilterImg = styled.img`
//   width: 2.5em;
//   height: 2.5em;
//   position: absolute;
//   left: 0;
//   top: 50%;
//   transform: translate(0%, -50%);

//   &: hover {
//     cursor: pointer;
//   }
// `;

// const SearchImg = styled.img`
//   width: 1.5em;
//   height: 1.5em;

//   &: hover {
//     cursor: pointer;
//   }
// `;

// const InputContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   margin-left: 3rem;
// `;

// const WriteBtn = styled.span`
//   width: 10rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   border: none;
//   outline: none;
//   font-size: 1.25em;
//   margin-left: 0.5rem;
// `;

// const FilterForm = styled.form`
//   width: 95%;

//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 1% auto;

//   @media screen and (max-width: 1023px) {
//     flex-direction: column;
//     gap: 10px;
//     align-items: flex-start;
//   }

//   @media screen and (max-width: 767px) {
//   }
// `;

// const FormItems = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 5px;
// `;

// const FormInfo = styled.div`
//   font-size: 1.25em;
//   margin-right: 0.3rem;
// `;

// const top100Films = [
//   { label: 'The Shawshank Redemption', year: 1994 },
//   { label: 'The Godfather', year: 1972 },
//   { label: 'The Godfather: Part II', year: 1974 },
//   { label: 'The Dark Knight', year: 2008 },
//   { label: '12 Angry Men', year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: 'Pulp Fiction', year: 1994 },
//   { label: 'The Shawshank Redemption', year: 1994 },
//   { label: 'The Godfather', year: 1972 },
//   { label: 'The Godfather: Part II', year: 1974 },
//   { label: 'The Dark Knight', year: 2008 },
//   { label: '12 Angry Men', year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: 'Pulp Fiction', year: 1994 },
//   { label: 'The Shawshank Redemption', year: 1994 },
//   { label: 'The Godfather', year: 1972 },
//   { label: 'The Godfather: Part II', year: 1974 },
//   { label: 'The Dark Knight', year: 2008 },
//   { label: '12 Angry Men', year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: 'Pulp Fiction', year: 1994 },
//   { label: 'The Shawshank Redemption', year: 1994 },
//   { label: 'The Godfather', year: 1972 },
//   { label: 'The Godfather: Part II', year: 1974 },
//   { label: 'The Dark Knight', year: 2008 },
//   { label: '12 Angry Men', year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: 'Pulp Fiction', year: 1994 },
//   { label: 'Mix dog', year: 1900 },
// ];

// function Search() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [isAdoption, setIsAdoption] = useState<string>('');
//   const [minYear, setMinYear] = useState<string>('');
//   const [maxYear, setMaxYear] = useState<string>('');
//   const [title, setTitle] = useState<string>('');
//   const [categories, setCategories] = useState<string[]>([]);
//   const [isYoung, setIsYoung] = useState<string>(''); 

//   const FilterOpenHandler = () => {
//     setIsOpen(!isOpen);
//   };

//   const SelectAdoptionHandler = (e: SelectChangeEvent) => {
//     setIsAdoption(e.target.value);
//   };

//   const SelectIsYoungHandler = (e: SelectChangeEvent) => {
//     setIsYoung(e.target.value);
//   };

//   const writeBtnClickHandler = () => {
//     if (localStorage.getItem('accessToken') === null) {
//       alert('로그인 후 이용 가능합니다.');
//       navigate('/login');
//     } else navigate('/petwrite');
//   };

//   const searchHandler = async () => {
//     const filterRequest = {
//       categories,
//       isYoung: isYoung === 'false',
//       status: isAdoption,
//       minYear,
//       maxYear,
//       title
//     };

//     try {
//       const response = await axios.get('http://localhost:8080/api/v1/pet_board/search', {
//         params: {
//           categories: filterRequest.categories,
//           isYoung: filterRequest.isYoung,
//           status: filterRequest.status,
//           minYear: filterRequest.minYear,
//           maxYear: filterRequest.maxYear,
//           title: filterRequest.title,
//           page: 0,
//           size: 10
//         }
//       });

//       console.log(response.data);
//       // 검색 결과를 상태로 저장하거나 원하는 방식으로 처리
//     } catch (error) {
//       console.error('검색 중 오류가 발생했습니다.', error);
//     }
//   };

//   return (
//     <SearchWrapper>
//       <SearchContainer> 
//         <FilterImg src={FilterIcon} alt="필터" onClick={FilterOpenHandler} />
//         <InputContainer>
//           <SearchImg src={SearchIcon} alt="검색" onClick={searchHandler} />
//           <Input type="text" placeholder="검색할 내용을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />
//         </InputContainer>
//         <Button
//           variant="outlined"
//           color="warning"
//           onClick={writeBtnClickHandler}
//         >
//           <WriteBtn>글 작성하기</WriteBtn>
//         </Button>
//       </SearchContainer>

//       {isOpen && (
//         <FilterForm>
//           <FormControl sx={{ minWidth: 140 }}>
//             <InputLabel id="state">입양 상태</InputLabel>
//             <Select
//               id="state"
//               value={isAdoption}
//               onChange={SelectAdoptionHandler}
//             >
//               {/* <MenuItem value="all">전체</MenuItem> */}
//               <MenuItem value="Awaiting_adoption">입양 대기</MenuItem>
//               <MenuItem value="Adoption_complete">입양 완료</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl sx={{ minWidth: 180 }}>
//             <InputLabel id="isYoung">60일 미만여부</InputLabel>
//             <Select
//               id="isYoung"
//               value={isYoung}
//               onChange={SelectIsYoungHandler}
//             >
//               <MenuItem value="true">Yes</MenuItem>
//               <MenuItem value="false">No</MenuItem>
//             </Select>
//           </FormControl>

//           <FormItems>
//             <FormInfo>나이</FormInfo>
//             <TextField variant="outlined" placeholder="0" value={minYear} onChange={(e) => setMinYear(e.target.value)} sx={{ width: 100 }} />
//             <span>~</span>
//             <TextField variant="outlined" placeholder="" value={maxYear} onChange={(e) => setMaxYear(e.target.value)} sx={{ width: 100 }} />
//           </FormItems>

//           <FormItems>
//             <FormInfo>품종</FormInfo>
//             <Autocomplete
//               disablePortal
//               id="combo-box-demo"
//               options={top100Films}
//               sx={{ width: 300 }}
//               onChange={(event, value) => setCategories(value ? [value.label] : [])}
//               renderInput={(params) => <TextField {...params} label="전체" />}
//             />
//           </FormItems>
//         </FilterForm>
//       )}
//     </SearchWrapper>
//   );
// }

// export default Search;