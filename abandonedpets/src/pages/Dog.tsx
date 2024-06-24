import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Search from '../components/pets/Search';
import DogList from '../components/pets/DogList';
import { PetInfo } from '../components/pets/PetCard';

function Dog() {
  const [pets, setPets] = useState<PetInfo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearchResults = (searchResults: any[], totalPages: number) => {
    if (Array.isArray(searchResults)) {
      const petData = searchResults.map((petBoard) => ({
        id: petBoard.petBoardId,
        desertionNo: petBoard.petInfo.desertionNo,
        filename: petBoard.petInfo.filename,
        popfile: petBoard.petInfo.popfile,
        processState: petBoard.petInfo.processState,
        age: petBoard.petInfo.age,
        weight: petBoard.petInfo.weight,
        sexCd: petBoard.petInfo.sexCd,
        kindCd: petBoard.petInfo.kindCd,
        img: petBoard.petInfo.popfile || '이미지 없음',
        fav: '',
        name: petBoard.title,
      }));
      setPets(petData);
      setTotalPages(totalPages);
    } else {
      setPets([]);
      setTotalPages(0);
    }
  };

  useEffect(() => {
    const fetchPets = async (page: number) => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/pet_board/list/type/개', {
          params: {
            page: page - 1,
            size: 12
          }
        });

        if (response.data && response.data.result) {
          handleSearchResults(response.data.result, response.data.totalPages);
        } else {
          console.error('Invalid response structure', response.data);
        }
      } catch (error) {
        console.error('Error fetching pet data:', error);
      }
    };

    fetchPets(currentPage);
  }, [currentPage]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <NavBar />
      <Search onSearch={handleSearchResults} />
      <DogList pets={pets} totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      <Footer />
    </>
  );
}

export default Dog;







// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Search from '../components/pets/Search';
// import DogList from '../components/pets/DogList';

// function Dog() {
//   return (
//     <>
//       <NavBar />
//       <Search />
//       <DogList />
//       <Footer />
//     </>
//   );
// }

// export default Dog;
