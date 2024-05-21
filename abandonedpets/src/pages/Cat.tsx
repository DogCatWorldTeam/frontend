import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Search from '../components/pets/Search';
import CatList from '../components/pets/CatList';
import SelectPage from '../components/pets/SelectPage';

function Cat() {
  return (
    <>
      <NavBar />
      <Search />
      <CatList />
      <SelectPage />
      <Footer />
    </>
  );
}

export default Cat;
