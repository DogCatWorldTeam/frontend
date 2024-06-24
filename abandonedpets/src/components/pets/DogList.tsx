import React from 'react';
import styled from 'styled-components';
import PetCard, { PetInfo } from './PetCard';
import SelectPage from './SelectPage';

const PetContainer = styled.div`
  max-width: 75%;
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr); // 3개의 열
  gap: 20px;
  margin: 3% auto;

  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr); // 2개의 열
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr); // 1개의 열
  }
`;

interface DogListProps {
  pets: PetInfo[];
  totalPages: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

function DogList({ pets = [], totalPages, currentPage, onPageChange }: DogListProps) {
  return (
    <div>
      <PetContainer>
        {pets.length > 0 ? (
          pets.map((pet, index) => (
            <PetCard key={index} pet={pet} />
          ))
        ) : (
          <div>검색 조건에 맞는 결과가 없습니다.</div>
        )}
      </PetContainer>
      <SelectPage count={totalPages} page={currentPage} onChange={onPageChange} />
    </div>
  );
}

export default DogList;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import PetCard from './PetCard';
// import Favorite from '../../assets/Favorite.svg';
// import SelectPage from './SelectPage';

// const PetContainer = styled.div`
//   max-width: 75%;
//   width: 100%;
//   display: grid;
//   place-items: center;
//   // grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
//   grid-template-columns: repeat(3, 1fr); // 3개의 열
//   gap: 20px;
//   margin: 3% auto;

//   @media screen and (max-width: 1023px) {
//     grid-template-columns: repeat(2, 1fr); // 2개의 열
//   }

//   @media screen and (max-width: 767px) {
//     grid-template-columns: repeat(1, 1fr); // 1개의 열
//   }
// `;


// interface PetInfo {
//   id: number;
//   desertionNo: number;
//   filename: string;
//   popfile: string;
//   processState: string;
//   age: string;
//   weight: string;
//   sexCd: string;
//   kindCd: string;
//   name: string;
//   img: string;
//   fav: string;
// }

// interface PetBoard {
//   petBoardId: number;
//   title: string;
//   description: string;
//   petInfo: PetInfo;
//   status: string;
// }

// interface ApiResponse {
//   message: string;
//   result: PetBoard[];
//   totalPages: number;
// }

// function DogList() {
//   const [pets, setPets] = useState<PetInfo[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const fetchPets = async (page: number) => {
//       try {
//         const response = await axios.get<ApiResponse>(
//           `http://localhost:8080/api/v1/pet_board/list/type/개?page=${page - 1}&size=12`,
//         );
//         if (response.data && response.data.result) {
//           const petData = response.data.result.map((petBoard) => ({
//             id: petBoard.petInfo.id,
//             desertionNo: petBoard.petInfo.desertionNo,
//             filename: petBoard.petInfo.filename,
//             popfile: petBoard.petInfo.popfile,
//             processState: petBoard.petInfo.processState,
//             age: petBoard.petInfo.age,
//             weight: petBoard.petInfo.weight,
//             sexCd: petBoard.petInfo.sexCd,
//             kindCd: petBoard.petInfo.kindCd,
//             img: petBoard.petInfo.popfile || '이미지 없음',
//             fav: Favorite,
//             name: petBoard.petInfo.desertionNo,
//           }));
//           setPets(petData);
//           setTotalPages(response.data.totalPages);
//         } else {
//           console.error('Invalid response structure', response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching pet data:', error);
//       }
//     };

//     fetchPets(currentPage).catch((error) => {
//       console.error('Error fetching pet data:', error);
//     });
//   }, [currentPage]);

//   const handlePageChange = (
//     event: React.ChangeEvent<unknown>,
//     value: number,
//   ) => {
//     setCurrentPage(value);
//   };

//   return (
//     <div>
//       <PetContainer>
//         {pets.map((pet, index) => (
//           <PetCard key={index} pet={pet} />
//         ))}
//       </PetContainer>
//       <SelectPage
//         count={totalPages}
//         page={currentPage}
//         onChange={handlePageChange}
//       />
//     </div>
//   );
// }

// export default DogList;
