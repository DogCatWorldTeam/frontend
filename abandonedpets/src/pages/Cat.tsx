import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Search from '../components/pets/Search';
import CatList from '../components/pets/CatList';

function Cat() {
  return (
    <>
      <NavBar />
      <Search />
      <CatList />
      <Footer />
    </>
  );
}

export default Cat;
