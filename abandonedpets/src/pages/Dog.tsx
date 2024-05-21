import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Search from '../components/pets/Search';
import DogList from '../components/pets/DogList';
import SelectPage from '../components/pets/SelectPage';

function Dog() {
  return (
    <>
      <NavBar />
      <Search />
      <DogList />
      <SelectPage />
      <Footer />
    </>
  );
}

export default Dog;
