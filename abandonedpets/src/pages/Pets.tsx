import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Search from '../components/pets/Search';
import PetList from '../components/pets/PetList';
import SelectPage from '../components/pets/SelectPage';

function Pets() {
  return (
    <>
      <NavBar />
      <Search />
      <PetList />
      <SelectPage />
      <Footer />
    </>
  );
}

export default Pets;
